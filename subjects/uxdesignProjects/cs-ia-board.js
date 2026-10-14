(function () {
    var board = document.getElementById('cs-ia-board');
    if (!board) return;

    var viewport = board.querySelector('.cs-ia-board__viewport');
    var world = board.querySelector('.cs-ia-board__world');
    var zoomLabel = board.querySelector('[data-ia-zoom-label]');
    if (!viewport || !world) return;

    var TREE = {
        label: 'Work In City Of Saint Paul',
        children: [
            {
                label: 'Jobs',
                children: [
                    {
                        label: 'Job Reviews Page',
                        children: [
                            {
                                label: 'Administrative',
                                children: [
                                    { label: 'Payroll Specialist Review' },
                                    { label: 'Senior Innovation Consultant' },
                                    { label: 'Compensation Analyst Review' },
                                    { label: 'Procedures Coordinator Review' },
                                    { label: 'Buyer Review' },
                                    { label: 'Human Rights Specialist Review' },
                                    { label: 'Senior Workers Compensation Claims Processor Review' },
                                    { label: 'Human Resources Interns Review' },
                                    { label: 'Library Associate Review' },
                                    { label: 'Sprockets Communication and Evaluation Coordinator Review' }
                                ]
                            },
                            {
                                label: 'Public Service',
                                children: [
                                    { label: 'Fire Buildings Repairer Review' },
                                    { label: 'Sewer Services Worker Review' },
                                    { label: 'Street Services Worker Review' },
                                    { label: 'Traffic Maintenance Worker Review' }
                                ]
                            }
                        ]
                    },
                    { label: 'Applicant Data Practices' },
                    { label: 'Join the Talent Community' },
                    {
                        label: 'Benefits',
                        children: [
                            {
                                label: 'Benefit Summaries',
                                children: [
                                    { label: 'How to Apply and Veteran’s Preference' },
                                    { label: 'Retiree Benefits' },
                                    {
                                        label: 'Employee Assistance',
                                        children: [
                                            { label: 'Employee Benefits' },
                                            { label: 'Employee Assistance: Whom To Call' },
                                            { label: 'Documents & Resources' }
                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Healthy Saint Paul',
                                children: [
                                    { label: 'City of Saint Paul Insurance Requirements' }
                                ]
                            }
                        ]
                    },
                    {
                        label: 'Public Safety / First Responders',
                        children: [
                            {
                                label: 'Firefighter Information',
                                children: [
                                    { label: '2018 Firefighter Eligible List' },
                                    { label: 'How to Prepare for a Firefighter Physical Test' },
                                    { label: 'Fire Buildings Repairer Review' },
                                    { label: 'Obtaining State of Minnesota EMT Certificate' }
                                ]
                            },
                            {
                                label: 'Police Officer Information',
                                children: [
                                    { label: 'Police Chief Position' },
                                    { label: 'Obtaining State of Minnesota EMT Certificate' }
                                ]
                            }
                        ]
                    }
                ]
            },
            { label: 'Internship & Volunteer Opportunities' }
        ]
    };

    function renderNode(node, open) {
        var kids = node.children || [];
        var wrap = document.createElement('div');
        wrap.className = 'cs-ia-node' + (open ? ' is-open' : '');

        var frame = document.createElement(kids.length ? 'button' : 'div');
        frame.className = 'cs-ia-node__frame' + (kids.length ? ' has-children' : '');
        frame.textContent = node.label;
        if (kids.length) {
            frame.type = 'button';
            frame.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        wrap.appendChild(frame);

        if (kids.length) {
            var list = document.createElement('div');
            list.className = 'cs-ia-node__children';
            if (!open) list.hidden = true;
            kids.forEach(function (child) {
                list.appendChild(renderNode(child, false));
            });
            wrap.appendChild(list);

            frame.addEventListener('click', function (event) {
                event.stopPropagation();
                var next = !wrap.classList.contains('is-open');
                wrap.classList.toggle('is-open', next);
                frame.setAttribute('aria-expanded', next ? 'true' : 'false');
                list.hidden = !next;
            });
        }

        return wrap;
    }

    world.appendChild(renderNode(TREE, true));

    var scale = 1;
    var x = 32;
    var y = 32;
    var dragging = false;
    var lastX = 0;
    var lastY = 0;

    function apply() {
        world.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + scale + ')';
        if (zoomLabel) zoomLabel.textContent = Math.round(scale * 100) + '%';
    }

    function setScale(next, originX, originY) {
        var clamped = Math.min(1.8, Math.max(0.5, next));
        if (originX != null && viewport) {
            var rect = viewport.getBoundingClientRect();
            var px = originX - rect.left;
            var py = originY - rect.top;
            var wx = (px - x) / scale;
            var wy = (py - y) / scale;
            x = px - wx * clamped;
            y = py - wy * clamped;
        }
        scale = clamped;
        apply();
    }

    viewport.addEventListener('pointerdown', function (event) {
        if (event.button !== 0) return;
        if (event.target.closest('.cs-ia-node__frame')) return;
        dragging = true;
        lastX = event.clientX;
        lastY = event.clientY;
        viewport.classList.add('is-panning');
        viewport.setPointerCapture(event.pointerId);
    });

    viewport.addEventListener('pointermove', function (event) {
        if (!dragging) return;
        x += event.clientX - lastX;
        y += event.clientY - lastY;
        lastX = event.clientX;
        lastY = event.clientY;
        apply();
    });

    function endPan(event) {
        dragging = false;
        viewport.classList.remove('is-panning');
        if (event && viewport.hasPointerCapture(event.pointerId)) {
            viewport.releasePointerCapture(event.pointerId);
        }
    }

    viewport.addEventListener('pointerup', endPan);
    viewport.addEventListener('pointercancel', endPan);

    viewport.addEventListener('wheel', function (event) {
        event.preventDefault();
        var factor = event.deltaY < 0 ? 1.08 : 1 / 1.08;
        setScale(scale * factor, event.clientX, event.clientY);
    }, { passive: false });

    function centerTree() {
        var root = world.querySelector(':scope > .cs-ia-node > .cs-ia-node__frame');
        var vr = viewport.getBoundingClientRect();
        if (!root || vr.width < 10) return;
        var rr = root.getBoundingClientRect();
        x += (vr.left + vr.width / 2) - (rr.left + rr.width / 2);
        y += (vr.top + 28) - rr.top;
        apply();
    }

    function resetView() {
        scale = 1;
        x = 32;
        y = 32;
        apply();
        requestAnimationFrame(centerTree);
    }

    board.querySelectorAll('[data-ia-zoom]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var dir = btn.getAttribute('data-ia-zoom');
            if (dir === 'in') setScale(scale * 1.12);
            else if (dir === 'out') setScale(scale / 1.12);
            else resetView();
        });
    });

    var dialog = document.getElementById('cs-ia-modal');
    if (dialog) {
        dialog.addEventListener('toggle', function () {
            if (dialog.open) requestAnimationFrame(resetView);
        });
    }

    var openBtn = document.querySelector('.cs-ia-split__open');
    if (openBtn) {
        openBtn.addEventListener('click', function () {
            window.setTimeout(resetView, 50);
        });
    }

    apply();
})();
