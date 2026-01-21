// Access global object from IIFE build
const { getRegionOptions, getProvinciaOptions, getComunaOptions } = window.ChileanTerritorialDivisions;

const $ = (id) => document.getElementById(id);

// --- Full Demo Elements ---
const fullEls = {
    region: $('select-region'),
    provincia: $('select-provincia'),
    comuna: $('select-comuna'),
    result: $('result-display'),
    output: $('json-output'),
};

// --- Simple Demo Elements ---
const simpleEls = {
    region: $('simple-region'),
    comuna: $('simple-comuna'),
    result: $('simple-result-display'),
    output: $('simple-json-output'),
};

function populateSelect(element, options) {
    // Keep first option (placeholder)
    const placeholder = element.firstElementChild;
    element.innerHTML = '';
    element.appendChild(placeholder);

    // Add new options
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        element.appendChild(option);
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    const regionOpts = getRegionOptions();
    populateSelect(fullEls.region, regionOpts);
    populateSelect(simpleEls.region, regionOpts);

    setupTabs();
});

// --- Tabs Logic ---
function setupTabs() {
    // Main demo tabs (full vs simple)
    const mainTabs = document.querySelectorAll('.code-tabs:not(.code-tabs-small) .code-tab');

    mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mainTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.demo-container.code-panel').forEach(panel => {
                panel.classList.remove('active');
            });

            const targetId = `panel-${tab.dataset.tab}`;
            const targetPanel = $(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // Code example tabs (TS, React, Angular) within each demo
    document.querySelectorAll('.code-tabs-small').forEach(tabsContainer => {
        const tabs = tabsContainer.querySelectorAll('.code-tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Find sibling code panels
                const parent = tabsContainer.parentElement;
                parent.querySelectorAll('.code-panel').forEach(panel => {
                    panel.classList.remove('active');
                });

                const targetId = `code-${tab.dataset.code}`;
                const targetPanel = $(targetId);
                if (targetPanel) targetPanel.classList.add('active');
            });
        });
    });
}

// --- Full Demo Logic ---
fullEls.region.addEventListener('change', (e) => {
    const region = e.target.value;

    // Reset Province
    fullEls.provincia.value = "";
    fullEls.provincia.disabled = !region;
    populateSelect(fullEls.provincia, region ? getProvinciaOptions(region) : []);

    // Reset Comuna
    fullEls.comuna.value = "";
    fullEls.comuna.disabled = true;
    populateSelect(fullEls.comuna, []);

    updateFullDisplay();
});

fullEls.provincia.addEventListener('change', (e) => {
    const region = fullEls.region.value;
    const provincia = e.target.value;

    // Update Comuna
    fullEls.comuna.value = "";
    fullEls.comuna.disabled = !provincia;
    populateSelect(fullEls.comuna, provincia ? getComunaOptions(region, provincia) : []);

    updateFullDisplay();
});

fullEls.comuna.addEventListener('change', updateFullDisplay);

function updateFullDisplay() {
    const data = {
        region: fullEls.region.options[fullEls.region.selectedIndex]?.text,
        provincia: fullEls.provincia.options[fullEls.provincia.selectedIndex]?.text,
        comuna: fullEls.comuna.options[fullEls.comuna.selectedIndex]?.text,
        cut: fullEls.comuna.value
    };

    const cleanData = filterAndClean(data);
    displayResult(cleanData, fullEls.result, fullEls.output);
}

// --- Simple Demo Logic (Region -> Comuna) ---
simpleEls.region.addEventListener('change', (e) => {
    const region = e.target.value;

    // Reset Comuna directly
    simpleEls.comuna.value = "";
    simpleEls.comuna.disabled = !region;
    // Load ALL comunas for the region
    populateSelect(simpleEls.comuna, region ? getComunaOptions(region) : []);

    updateSimpleDisplay();
});

simpleEls.comuna.addEventListener('change', updateSimpleDisplay);

function updateSimpleDisplay() {
    const data = {
        region: simpleEls.region.options[simpleEls.region.selectedIndex]?.text,
        comuna: simpleEls.comuna.options[simpleEls.comuna.selectedIndex]?.text,
        cut: simpleEls.comuna.value
    };

    const cleanData = filterAndClean(data);
    displayResult(cleanData, simpleEls.result, simpleEls.output);
}

// --- Helpers ---
function filterAndClean(data) {
    return Object.fromEntries(
        Object.entries(data).filter(([_, v]) =>
            v && !v.startsWith("Seleccione")
        )
    );
}

function displayResult(data, container, output) {
    if (Object.keys(data).length > 0) {
        container.classList.remove('hidden');
        output.textContent = JSON.stringify(data, null, 2);
    } else {
        container.classList.add('hidden');
    }
}
