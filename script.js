const eventSelect = document.getElementById('eventSelect');
const eventsSection = document.getElementById('eventsSection');
const main = document.getElementById('mainContent');

const events = {
  B: ['Anatomy and Physiology', 'Crime Busters', 'Meteorology', 'Road Scholar'],
  C: ['Disease Detectives', 'Forensics', 'Astronomy', 'Experimental Design']
};

function selectDivision(division) {
  eventSelect.innerHTML = '';
  events[division].forEach(event => {
    const opt = document.createElement('option');
    opt.value = event;
    opt.textContent = event;
    eventSelect.appendChild(opt);
  });
  eventsSection.classList.remove('hidden');
  main.innerHTML = `<h1>Division ${division} - Question Page</h1><p>Select an event and filters on the left to get started.</p>`;
}

function goBack() {
  eventsSection.classList.add('hidden');
  main.innerHTML = `<h1>Welcome to Science Olympiad Prep</h1><p>Select a division to begin answering questions.</p>`;
}
