const locations = {
    belfast: {
        center: { lat: 54.6046, lng: -5.9291 },
        title: "Belfast Office",
        address: "Block BC Level 2, 2-24 York Street, Belfast, BT15 1AP"
    },
    coleraine: {
        center: { lat: 55.1344, lng: -6.6680 },
        title: "Coleraine Office",
        address: "Room E023, Cromore Road, Coleraine, BT52 1SA"
    },
    derry: {
        center: { lat: 54.9966, lng: -7.3086 },
        title: "Derry Office",
        address: "Room MG108G, Northland Road, Derry-Londonderry, BT48 7JL"
    }
};

let maps = {};

function initMap() {
    Object.keys(locations).forEach(city => {
        const location = locations[city];

        const map = new google.maps.Map(document.getElementById(`map-${city}`), {
            zoom: 15,
            center: location.center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        const marker = new google.maps.Marker({
            position: location.center,
            map: map,
            title: location.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px;">
                    <h4 style="margin: 0 0 8px 0;">${location.title}</h4>
                    <p style="margin: 0; font-size: 12px;">${location.address}</p>
                </div>
            `
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        maps[city] = map;
    });
}

$(document).ready(function () {
    const defaultCity = "derry";

    // Open default section
    const defaultHeader = $(`.accordion2 h3[data-city="${defaultCity}"]`);
    const defaultContent = defaultHeader.next(".content");

    defaultHeader.addClass("active").attr("aria-expanded", "true");
    defaultContent.show().attr("aria-hidden", "false");

    setTimeout(() => {
        if (maps[defaultCity]) {
            google.maps.event.trigger(maps[defaultCity], 'resize');
        }
    }, 100);

    $(".accordion2 h3").click(function () {
        const cityName = $(this).data("city");
        const isActive = $(this).hasClass("active");

        // Collapse all
        $(".accordion2 h3").removeClass("active").attr("aria-expanded", "false");
        $(".accordion2 .content").slideUp("slow").attr("aria-hidden", "true");

        // Expand selected
        if (!isActive) {
            $(this).addClass("active").attr("aria-expanded", "true");
            const content = $(this).next(".content");
            content.slideDown("slow", function () {
                content.attr("aria-hidden", "false");
                if (maps[cityName]) {
                    google.maps.event.trigger(maps[cityName], 'resize');
                    maps[cityName].setCenter(locations[cityName].center);
                }
            });
        }
    });
});
