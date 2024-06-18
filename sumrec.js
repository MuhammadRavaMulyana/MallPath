const mapImage = document.getElementById('map-image');
const floorSelect = document.getElementById('floor-select');

floorSelect.addEventListener('change', function() {
    const selectedFloor = this.value;

    if (selectedFloor === 'ground') {
        mapImage.src = '../aset/ground-floor.png';
    } else if (selectedFloor === 'first') {
        mapImage.src = '../aset/floor1.png';
    } else if (selectedFloor === 'second') {
        mapImage.src = '../aset/floor2.png';
    } else {
        mapImage.src = '../aset/ground-floor.png';
    }
});

document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toUpperCase();
    const storeList = document.getElementById('store-list');
    const stores = storeList.getElementsByTagName('li');

    for (let i = 0; i < stores.length; i++) {
        const store = stores[i];
        const txtValue = store.textContent || store.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            store.style.display = "";
        } else {
            store.style.display = "none";
        }
    }
});
