
function getUserInfo() {
    // Get user agent
    const userAgent = navigator.userAgent;

    // Get platform and operating system
    const platform = navigator.platform;

    // Get language
    const language = navigator.language;

    // Get screen resolution
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Get available screen space
    const availWidth = window.screen.availWidth;
    const availHeight = window.screen.availHeight;

    // Get time zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get cookie enabled status
    const cookiesEnabled = navigator.cookieEnabled;

    // Get browser online status
    const online = navigator.onLine;

    // Get referrer (previous page)
    const referrer = document.referrer;

    // Get color depth
    const colorDepth = window.screen.colorDepth;

    // Get device memory (if supported)
    const deviceMemory = navigator.deviceMemory || "Not supported";

    // Get connection information (if supported)
    const connection = navigator.connection || {};
    const networkInfo = {
        effectiveType: connection.effectiveType || "Not supported",
        downlink: connection.downlink || "Not supported",
        rtt: connection.rtt || "Not supported"
    };

    // Get the current URL
    const currentUrl = window.location.href;

    // Get browser window size
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Detect which page the user is on
    const pagePath = window.location.pathname;
    const pageName = pagePath.split('/').pop() || 'index.html';
    const pageType = pagePath.includes('standalone_pages') ? 'Standalone Page' : 'Main Portfolio';

    return {
        userAgent,
        platform,
        language,
        screenResolution: `${screenWidth}x${screenHeight}`,
        availableScreenSpace: `${availWidth}x${availHeight}`,
        timeZone,
        cookiesEnabled,
        online,
        referrer,
        colorDepth,
        deviceMemory,
        networkInfo,
        currentUrl,
        windowSize: `${windowWidth}x${windowHeight}`,
        pageName,
        pageType
    };
}

function getUserIP() {
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => console.error('Error fetching IP:', error));
}

const referredUser = getQueryParam('ref');
var referredUserText = "";
if (referredUser) {
  referredUserText = `It's a referred user ! : ${referredUser} \n`
}

const myTopic = "L6mPhiwl8zSmjaV5WviYgxo7j9jm7" + "ax5KaGiDVwt82qC7SiBeSZoL6VGcjRk94yY";


// Combine all data into a JSON string
function sendUserData() {
  // Only send notification if not running locally
  const isLocal = location.href.startsWith("file://");
  if (isLocal) return;

  const userInfo = getUserInfo(); // Get user information
  const referredUser = getQueryParam('ref'); // Get referred user from URL
  const referredUserText = referredUser ? `It's a referred user ! : ${referredUser}` : ""; // Create text for referred user

  // Get user IP asynchronously
  getUserIP().then(userIP => {
      // Combine all data
      const userData = {
          ...userInfo, // Spread user info object into final object
          ipAddress: userIP, // Add IP address
          referredUserText // Add referred user text
      };
      
      // Convert the final object to JSON string
      const jsonString = JSON.stringify(userData, null, 2); // Pretty-printed JSON

      fetch('https://nt' + 'fy.sh/' +myTopic, {
        method: 'POST',
        body: jsonString,
        headers: {
            'Title': 'Nouvelle conexion au portfolio',
            'Tags': 'loudspeaker'
        }
      })
  }).catch(error => {
      console.error("Error creating user JSON:", error);
  });
}


sendUserData();
