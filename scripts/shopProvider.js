// A list of all the coffee shops along with relevant information in the form of objects in an array
const listOfShops = [
    {
        name: "The Jam",
        address: "1210 Wedgewood Ave, Nashville, TN 37212",
        phone: "(615) 823-3292",
        website: "http://thejamcoffeehouse.com/",
        menu: "https://www.allmenus.com/tn/nashville/383897-the-jam-coffee-house/menu/"
    },
    {
        name: "The Well",
        address: "690 Old Hickory Blvd. Brentwood, TN 37027",
        phone: "(615) 457-2684",
        website: "http://www.wellcoffeehouse.com/",
        menu: "http://www.wellcoffeehouse.com/menu/"
    },
    {
        name: "Red Bicycle",
        address: "41 Peabody Street Nashville, TN 37210",
        phone: "(615) 727-8555",
        website: "http://redbicyclecoffee.com/",
        menu: ""
    },
    {
        name: "Crema",
        address: "15 Hermitage Ave. Nashville, TN 37210",
        phone: "(615) 255-8311",
        website: "https://crema-coffee.com/",
        menu: ""
    },
    {
        name: "Frothy Monkey",
        address: "2509 12th Ave. S. Nashville, TN 37204",
        phone: "(615) 600-4756",
        website: "https://frothymonkey.com/",
        menu: "https://frothymonkey.com/menu/"
    },
    {
        name: "8th &amp; Roast",
        address: "4104 Charlotte Ave, Nashville, TN 37209",
        phone: "(615) 988-4020",
        website: "https://www.8thandroast.com/",
        menu: "https://www.8thandroast.com/menu-1"
    },
    {
        name: "Bongo Java",
        address: "372 Herron Drive, Nashville, TN 37210",
        phone: "(615) 385-5282",
        website: "https://www.bongojava.com/",
        menu: "https://www.bongojava.com/products_category/coffee/"
    },
    {
        name: "Flatrock",
        address: "2640 Nolensville Pike c, Nashville, TN 37211",
        phone: "(615) 678-6204",
        website: "http://www.flatrockcoffee.com/menu.html",
        menu: "http://www.flatrockcoffee.com/"
    },
    {
        name: "Fido",
        address: "1812 21st Ave. S, Nashville, TN 37212",
        phone: "(615) 777-3436",
        website: "https://www.bongojava.com/fido-cafe/",
        menu: "https://www.bongojava.com/fido-cafe/menu/"
    },
    {
        name: "Steadfast Coffee",
        address: "603 Taylor St., Nashville, TN 37208",
        phone: "(615) 891-7424",
        website: "https://steadfast.coffee/pages/germantown",
        menu: "https://steadfast.coffee/collections/all"
    },
    {
        name: "Dose Coffee",
        address: "3431 Murphy Rd., Nashville, TN 37203",
        phone: "(615) 457-1300",
        website: "http://dosenashville.com/location/",
        menu: "http://dosenashville.com/online-ordering"
    },
    {
        name: "Sam &amp; Zoes",
        address: "525 Heather Pl., Nashville, TN 37204",
        phone: "(615) 385-2676",
        website: "http://www.samandzoes.com/",
        menu: "http://www.samandzoes.com/menu-breakfast-and-lunch.html"
    },
    {
        name: "Slow Hand Coffee",
        address: "1012 Gallatin Ave, Nashville, TN 37206",
        phone: "(615) 730-8032",
        website: "",
        menu: "https://www.zmenu.com/slow-hand-coffee-bakeshop-nashville-online-menu/"
    },
    {
        name: "The Horn",
        address: "619 Murfreesboro Pike, Nashville, TN 37210",
        phone: "(615) 397-1977",
        website: "http://orderthehorncoffee.com/",
        menu: "https://themenustar3.com/webspace/menus.php?code=orderthehorncoffee.com"
    }
]

// Make a copy of the array above and export it so that it can be used in shopList.js
export const copyOfShops = listOfShops.slice();