var browser;

browser = '123';

if (browser === 'IE'){
    console.log('Oh, yeah, you have IE');
} else if(browser === 'Chrome' 
    || browser === 'Firefox' 
    || browser === 'Safari' 
    || browser === 'Opera') {
    console.log('Yes, we support this browser too')
} else {
    console.log('We hope, that in your browser is everything is ok')
}