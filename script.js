function cleansee(input) {
  let sanitized = input.trim().replace(/\s+/g, '_');
  sanitized = sanitized.replace(/[^a-zA-Z0-9_-]/g, '');
  if (!sanitized.startsWith('fa-')) {
    sanitized = 'fa-' + sanitized;
  }
  if (/^[0-9]/.test(sanitized)) {
    sanitized = 'fa-' + sanitized;
  }
  return sanitized;
}

function loadJS(url, implementationCode, location){
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to 
  //insert the <script> element

  var scriptTag = document.createElement('script');
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  if(location){
    location.appendChild(scriptTag);
  } else {
    document.body.appendChild(scriptTag);
  }
}
// Convert the blob to a Data URL
function convertBlobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function() {
      resolve(reader.result);  // Resolve the Data URL
    };
    reader.onerror = function(error) {
      reject(error);  // Reject if there's an error
    };
    reader.readAsDataURL(blob);  // Read the blob as a Data URL
  });
}
window.addEventListener("appinstalled", () => {
  swal("Thank you for installing our app!");
});
class Violetspace {
  constructor() {
    this.apps = new Map();
    this.maxNumAppsAllowed = 200;
  }

  defineNewApp(appobj, ttype) {
    if(ttype=="doNotRun") {return 0;}

    if(ttype == "file") {
      document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp(cleansee(${appobj.title}))" title="${appobj.title}"><img src="${appobj.image}" title="${appobj.title}" alt="${appobj.title}"></button>`;
      this.apps.set(cleansee(appobj.title), appobj);

    }
    if(ttype == "file+icon") {
      if(!appobj.image.startsWith("https://") && !appobj.image.startsWith("data:")){
      document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp('${appobj.title}')" title="${appobj.title}" style="background-image:url('https://docs-assets.developer.apple.com/published/72c3a6510c161665d4ca6cf0d6afdb94/music-app-icon-dark-background@2x.png')"><i class="fa ${cleansee(appobj.image)}"></i></button>`;
      } else {
        document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp('${appobj.title}')" title="${appobj.title}" style="background-image:url('https://docs-assets.developer.apple.com/published/72c3a6510c161665d4ca6cf0d6afdb94/music-app-icon-dark-background@2x.png')"><img src="${appobj.image}"></button>`;

      }
      this.apps.set(cleansee(appobj.title), appobj);

    }
    if(ttype == "file+iconblue") {
      if(!appobj.image.startsWith("https://") && !appobj.image.startsWith("data:")){
      document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp('${appobj.title}')" title="${appobj.title}" style="background-image:url('https://docs-assets.developer.apple.com/published/0f54a2f61dd4d0834fd5a7976f72cc14/visionos-safari-icon-layer-background@2x.png')"><i class="fa ${cleansee(appobj.image)}"></i></button>`;
      } else {
        document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp('${appobj.title}')" title="${appobj.title}" style="background-image:url('https://docs-assets.developer.apple.com/published/0f54a2f61dd4d0834fd5a7976f72cc14/visionos-safari-icon-layer-background@2x.png')"><img src="${appobj.image}"></button>`;

      }
      this.apps.set(cleansee(appobj.title), appobj);

    }
    if(ttype == "file+iconwhite") {
      if(!appobj.image.startsWith("https://") && !appobj.image.startsWith("data:")){
      document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp('${appobj.title}')" title="${appobj.title}" style="background-image:url('data:image/svgxml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxMiA5NTdDNzU3Ljc2NyA5NTcgOTU3IDc1Ny43NjcgOTU3IDUxMkM5NTcgMjY2LjIzMyA3NTcuNzY3IDY3IDUxMiA2N0MyNjYuMjMzIDY3IDY3IDI2Ni4yMzMgNjcgNTEyQzY3IDc1Ny43NjcgMjY2LjIzMyA5NTcgNTEyIDk1N1pNNTExLjkzOSA5MjkuOTM5Qzc0Mi43OTQgOTI5LjkzOSA5MjkuOTM5IDc0Mi43OTQgOTI5LjkzOSA1MTEuOTM5QzkyOS45MzkgMjgxLjA4NCA3NDIuNzk0IDkzLjkzOTUgNTExLjkzOSA5My45Mzk1QzI4MS4wODQgOTMuOTM5NSA5My45Mzk1IDI4MS4wODQgOTMuOTM5NSA1MTEuOTM5QzkzLjkzOTUgNzQyLjc5NCAyODEuMDg0IDkyOS45MzkgNTExLjkzOSA5MjkuOTM5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQxMDJfMikiLz4KPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSIyNjkiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl80MTAyXzIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNDEwMl8yIiB4MT0iNTEyIiB5MT0iNjYiIHgyPSI1MTIiIHkyPSI5NTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzQxMDJfMiIgeDE9IjUxMiIgeTE9IjI0Mi4zOTYiIHgyPSI1MTIiIHkyPSI3ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')"><i class="fa ${cleansee(appobj.image)}"></i></button>`;
      } else {
        document.getElementById('xVioletOS').innerHTML += `<button onclick="userRunApp('${appobj.title}')" title="${appobj.title}" style="background-image:url('data:image/svgxml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxMiA5NTdDNzU3Ljc2NyA5NTcgOTU3IDc1Ny43NjcgOTU3IDUxMkM5NTcgMjY2LjIzMyA3NTcuNzY3IDY3IDUxMiA2N0MyNjYuMjMzIDY3IDY3IDI2Ni4yMzMgNjcgNTEyQzY3IDc1Ny43NjcgMjY2LjIzMyA5NTcgNTEyIDk1N1pNNTExLjkzOSA5MjkuOTM5Qzc0Mi43OTQgOTI5LjkzOSA5MjkuOTM5IDc0Mi43OTQgOTI5LjkzOSA1MTEuOTM5QzkyOS45MzkgMjgxLjA4NCA3NDIuNzk0IDkzLjkzOTUgNTExLjkzOSA5My45Mzk1QzI4MS4wODQgOTMuOTM5NSA5My45Mzk1IDI4MS4wODQgOTMuOTM5NSA1MTEuOTM5QzkzLjkzOTUgNzQyLjc5NCAyODEuMDg0IDkyOS45MzkgNTExLjkzOSA5MjkuOTM5WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQxMDJfMikiLz4KPGNpcmNsZSBjeD0iNTEyIiBjeT0iNTEyIiByPSIyNjkiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl80MTAyXzIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNDEwMl8yIiB4MT0iNTEyIiB5MT0iNjYiIHgyPSI1MTIiIHkyPSI5NTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzQxMDJfMiIgeDE9IjUxMiIgeTE9IjI0Mi4zOTYiIHgyPSI1MTIiIHkyPSI3ODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')"><img src="${appobj.image}"></button>`;

      }
      this.apps.set(cleansee(appobj.title), appobj);

    }
  }

  getAppInfoToRun(appname) {
    var aaa = this.apps;
    return aaa.get(cleansee(appname));
  }
  exportData() {
    // Get all notes and photos
    Promise.all([db.notes.toArray(), db.photos.toArray()])
        .then(([notes, photos]) => {
            // Combine notes and photos into one object
            const data = {
                notes: notes,
                photos: photos,
            };

            // Convert data into a JSON string
            const jsonData = JSON.stringify(data, null, 2);

            // Create a Blob with the JSON data
            const blob = new Blob([jsonData], { type: 'application/json' });

            // Create a link to download the file
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'user_data.json';  // You can change the filename
            link.click();
        })
        .catch((err) => {
            console.error("Error exporting data:", err);
        });
}
}
const violet = new Violetspace();

window.violetexts = false;
this.hasStarted = localStorage.getItem('started') || false;
const spf = new Spacefriends();

function startVioletUp() {
  if(globalThis.hasStarted == true) {
    // idk
  } else {
    swal({
      text:"It looks like you've never used VioletspaceOS before, hope you enjoy it! It's a cool fake operating system project with nice tools and stuff that might help you with (or distract you from) doing a job. Your data is automatically saved on this device/browser. This saves stuff like notes/text files you write, settings, and more. You can see how much of the browser storage quota this site is taking up in the Settings app of this web OS. ",
      closeOnClickOutside: false,
      title: "Welcome!",
      icon: "info",
      className: "onStartUp1"
    });
// Create a new Dexie database instance
const db = new Dexie("VioletSpaceOSDB");

// Define the schema for the notes and photos
db.version(1).stores({
    notes: '++id, title, content, tags, createdDate',  // Notes table
    photos: '++id, title, tags, createdDate, dataUri',  // Photos table
});

db.open().catch((err) => {
    console.error("Failed to open database:", err);
});
  }
document.getElementById('lockscreen').remove();
document.getElementById('xVioletOS').removeAttribute('hidden');
document.getElementById('topUIsearch').removeAttribute('hidden');
document.getElementById('topUIextensions').removeAttribute('hidden');

violet.defineNewApp({
  image:"https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-rating-icon.png",
  title:"Starred stuff",
  appCode:""
},"file+icon");
violet.defineNewApp({
  image: "file-text-o",
  title: "Text Editor",
  appCode: `
   <style>
    #sssourceTA {
      display: block;
      float:left;
      width:49%;
      font-family:'Fira Code';
      resize:none;
      height:60%;
      background-color:#202020;
      background-image:linear-gradient(to left,#202020,#404040);
      color:white;
    }
    #tttargetDiv {
      border: 1px dashed #333333;
      width: 50%;
      height: 60%;
      float:right;
      overflow-y:scroll;
    }
    #runBtn {
display:none;
    }
  </style>
  <button id="runBtn"></button>
  <hr/>
  <textarea id="sssourceTA" oninput="document.getElementById('runBtn').click()">
  # Markdown stuff

  This is a markdown (simple text formatting syntax) editor.

  It's got cool stuff like:
  * lists
  * emojis (:smile: typed with \\:smile:)
  * ~~strikethrough~~


  
  It is also possible to include code:
\`\`\`js
      var foo = 'bar';

      var baz = {
        markdown: 'is great',
        showdown: 'is awesome'
      }
\`\`\`


  Woah cool link [example.com][1].

  [1]: https://example.com/
  </textarea>
  <div id="tttargetDiv"></div>

  `,
  appScripts: `

  function rrrun() {
      var text = document.getElementById('sssourceTA').value;
      var tttarget = document.getElementById('tttargetDiv');
      var converter = new showdown.Converter({ tables: true, simpleLineBreaks: true, simplifiedAutoLink: true, strikethrough: true, emoji: true, ghCompatibleHeaderId: true,disableForced4SpacesIndentedSublists:false,smartIndentationFix:true,smoothLivePreview:true,openLinksInNewWindow:true, tasklists:true, parseImgDimensions:true,ghCodeBlocks:true,omitExtraWLInCodeBlocks:true,encodeEmails:true});
      var html = converter.makeHtml(text);
      tttarget.innerHTML = html;
  }

  // Attach the onclick event once everything is loaded
  document.getElementById('runBtn').onclick = rrrun;
  document.getElementById('runBtn').click();
  `
}, "file+icon");


violet.defineNewApp({
  image:"cog",
  title:"Settings",
  appCode:`
  <br>
  <p class="info">You're currently using about <output id="stapercent"> </output>% of your estimated storage quota (<output id="staquota"></output>).</p>
<div class="info2">NOTICE: this is not a real OS/operating system, this is just a web project made by <a href="https://jeffreymaniac.github.io" target="_blank">a guy named Jeff</a></div>
<hr>

<div style="margin-left:20px;font-size:20px;line-height:2;cursor:pointer">
<button id="stabtn1">See all information about your device and browser (not stored)</button>
<button>Delete your data in this website</button>
<details>
<summary>Tab settings</summary>
</details>
<details>
<summary>For Developers</summary>
</details>
</div>

  `,
  appScripts: `
  navigator.storage.estimate().then((estimate) => {
    document.getElementById("stapercent").value = (
      (estimate.usage / estimate.quota) *
      100
    ).toFixed(2);
    document.getElementById("staquota").value =
      (estimate.quota / 1024 / 1024).toFixed(2) + "MB";
  });
  function uastuff() {
    swal(\`This is (kind of) technical info about the browser/device/site you're using. None of this is stored or sent to a server.\\n
    User-Agent: \$\{navigator.userAgent\}\\n
    Language(s): \$\{navigator.languages.toString() || navigator.language\}\\n
    Character encoding: \$\{document.characterSet\}\\n
    Is WebGPU supported?: \$\{navigator.gpu\}\\n
    Device memory: \$\{navigator.deviceMemory\} GiB\\n
    Max touch points: \$\{navigator.maxTouchPoints\}\\n
    Cookies enabled?: \$\{navigator.cookieEnabled\}\\n
    Device pixel ratio: \$\{window.devicePixelRatio\}\\n
    Screen color depth: \$\{screen.colorDepth\} bits\\n
    Screen pixel depth: \$\{screen.pixelDepth\}\\n
    PDF viewer enabled?: \$\{navigator.pdfViewerEnabled\}\\n
    Java enabled?: \$\{navigator.javaEnabled()\} (if this is true, you have an insecure browser and prolly should change it) \\n
    (unreliable) navigator.appName: \$\{navigator.appName\}\\n
    (unreliable) navigator.appCodeName: \$\{navigator.appCodeName\}\\n
    (unreliable) navigator.appVersion: \$\{navigator.appVersion\}\\n
    (unreliable) navigator.platform: \$\{navigator.platform\}\\n
    (unreliable) navigator.product: \$\{navigator.product\}\\n
    (unreliable) navigator.oscpu: \$\{navigator.oscpu\}\\n
    (unreliable) navigator.buildID: \$\{navigator.buildID\}\\n
    (unreliable) navigator.mimeTypes: \$\{navigator.mimeTypes.toString()\}\\n
    (ehh) navigator.plugins: \$\{navigator.plugins.toString()\}\\n

    \`);
  }
  document.getElementById('stabtn1').onclick = uastuff;
  `
},"file+icon");
violet.defineNewApp({
  image:"calculator",
  title:"Calculator",
  appCode:``,
  appScripts: `

  `
},"file+icon");
violet.defineNewApp({
  image:"photo",
  title:"Photos",
  appCode:`
  <img-gallery>
  <img src="https://image.freepik.com/free-photo/desert-and-the-road_426-19314945.jpg">
  <img src="https://image.freepik.com/free-photo/sunlight-through-the-grass_385-19321333.jpg">
  <img src="https://image.freepik.com/free-photo/colorful-springtime_385-19321241.jpg">
  <img src="https://image.freepik.com/free-photo/from-blue-to-brown_426-19320820.jpg">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Cayo_Levantado%2C_Samana%2C_Dominican_Republic.jpg">
  <img src="https://www.willflyforfood.net/wp-content/uploads/2021/06/dominican-food-mofongo.jpg.webp">
  </img-gallery>
  `
},"file+icon");
violet.defineNewApp({
  image:"paint-brush",
  title:"Drawing",
  appCode:`
  <style>
  #xAppCon {
background-color:darkgray;
  }
  #drawcanvas {
    border: 2px solid steelblue;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    aspect-ratio:16/9;
    width:60%;
    background-color:white;
  }
  
  .toolbox {
    background-color: steelblue;
    border: 1px solid slateblue;
    display: flex;
    width: 100%;
    padding: 1rem;
  }
  
  .toolbox > * {
    background-color: #fff;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    margin: 0.25rem;
    padding: 0.25rem;
    cursor: pointer;
  }
  
  #gridCheckbox,#sepiaBtn {
    margin-left: 1rem;
  }
  
  #saveImageBtn {
    margin-left: 1rem;
  }
  .fth {
    width:fit-content;
  }
  p.fth {
    width:fit-content;
    background-color:transparent;
    border:none;
    cursor:default;
  }
  </style>
  
  <canvas id="drawcanvas" width="1600" height="900"></canvas>
  
  <div class="toolbox">
  <p class="fth">Brush:</p> 
    <button id="decrease">-</button>
    <input type="number" id="size" value="10">
    <button id="increase">+</button>
    <input type="color" id="color">
    <button id="eraserBtn"><i class="fa fa-eraser"></i></button>
    <input type="checkbox" id="sepiaBtn"> Sepia Brush Filter
  </div>
  <div class="toolbox">
  <p class="fth">Canvas: </p>
  <button id="clear" class="fth">Clear</button>
  <input type="checkbox" id="gridCheckbox"> Show Grid
  <button id="saveImageBtn" class="fth">Save Image (.PNG)</button>
  <button id="saveImageBtn2" class="fth">Save Image (.JPG)</button>
</div>
  `,
  appScripts: `
  const canvas = document.getElementById('drawcanvas');
  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');
  const sizeEl = document.getElementById('size');
  const colorEl = document.getElementById('color');
  const clearEl = document.getElementById('clear');
  const gridCheckbox = document.getElementById('gridCheckbox');
  const eraserBtn = document.getElementById('eraserBtn');
  const saveImageBtn = document.getElementById('saveImageBtn');
  const saveImageBtn2 = document.getElementById('saveImageBtn2');
  const sepiaBtn = document.getElementById('sepiaBtn');
  
  const ctx = canvas.getContext('2d');
  
  let size = 10;
  let isPressed = false;
  let isEraser = false;
  let color = colorEl.value;
  let x, y;
  let isGridVisible = false;
  
  canvas.addEventListener('mousedown', () => {
      isPressed = true;
  });
  
  document.addEventListener('mouseup', () => {
      isPressed = false;
  });
  
  canvas.addEventListener('mousemove', (e) => {
      if (isPressed) {
          const x2 = e.offsetX;
          const y2 = e.offsetY;
          draw(x2, y2);
          x = x2;
          y = y2;
      }
  });
  
  function draw(x, y) {
      if (isGridVisible) drawGrid();  // Draw grid if visible
      if (isEraser) {
          erase(x, y);
      } else {
          drawTri(x, y);
          drawLine(x, y);
      }
  }
  
  function drawCircle(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color || "black";
      ctx.fill();
  }
  function drawTri(x, y) {
    ctx.beginPath();
    ctx.font = size+"px Arial";
    ctx.fillText("•"||"⬤",x,y);
        ctx.fillStyle = color || "black";
    ctx.fill();
}
  function drawLine(x1, y1, x2, y2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color || "black";
      ctx.lineWidth = size * 2;
      ctx.stroke();
  }
  
  function erase(x, y) {
      ctx.clearRect(x - size, y - size, size * 2, size * 2);
  }
  
  function drawGrid() {
      const gridSpacing = 20;
      ctx.strokeStyle = '#ccc';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gridSpacing) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y < canvas.height; y += gridSpacing) {
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
  }
  
  function updateSizeOnScreen() {
      sizeEl.value = size;  // Update the size in the input field
  }
  
  // Increase and decrease size buttons
  increaseBtn.addEventListener('click', () => {
      size += 5;
      if (size >= 80) {
          size = 80;
      }
      updateSizeOnScreen();
  });
  
  decreaseBtn.addEventListener('click', () => {
      size -= 5;
      if (size < 5) {
          size = 5;
      }
      updateSizeOnScreen();
  });
  
  // Update size from the input field
  sizeEl.addEventListener('change', (e) => {
      size = parseInt(e.target.value);  // Make sure the value is an integer
      updateSizeOnScreen();
  });
  
  // Update color when the color picker changes
  colorEl.addEventListener('change', (e) => {
      color = e.target.value;
  });
  
  // Clear canvas when the clear button is clicked
  clearEl.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (isGridVisible) drawGrid();  // Redraw the grid if visible
  });
  
  // Toggle grid visibility with checkbox
  gridCheckbox.addEventListener('change', (e) => {
      isGridVisible = e.target.checked;
      if (isGridVisible) {
          drawGrid();
      } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
      }
  });
  
  // Eraser tool
  eraserBtn.addEventListener('click', () => {
      isEraser = !isEraser;
      eraserBtn.style.backgroundColor = isEraser ? 'gray' : '';  // Toggle button color
  });
  
  // Save image as PNG
  saveImageBtn.addEventListener('click', () => {
      const imageUrl = canvas.toDataURL('image/png'); // Create a PNG image from the canvas
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'drawing.png';  // Default name for the saved image
      link.click();
      if(ctx.filter=='sepia(100%)') {
        ctx.filter = "sepia(-100%)";
  
      }
  });
  // Save image as JPG
  saveImageBtn2.addEventListener('click', () => {
      const imageUrl = canvas.toDataURL('image/jpg'); // Create a PNG image from the canvas
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'drawing.jpg';  // Default name for the saved image
      link.click();
      if(ctx.filter=='sepia(100%)') {
        ctx.filter = "sepia(-100%)";
  
      }
  }); 
  // Apply sepia filter to the canvas
  sepiaBtn.addEventListener('click', () => {
      ctx.filter = ctx.filter === 'sepia(100%)' ? 'none' : 'sepia(100%)';
  });
  
  `
},"file+icon");
violet.defineNewApp({
  image:"https://www.freeiconspng.com/thumbs/color-icons/color-icon-png-13.png",
  title:"Color Tools",
  appCode:`
  <style>
  * {
  box-sizing: border-box;
}

.clrcontrols {
  --c1: red;
  --c2: blue;
  --amount1: 50%;
  --amount2: 50%;
  background: color-mix(
    in var(--space, srgb),
    var(--c1) var(--amount1),
    var(--c2) var(--amount2)
  );
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  min-height: 100vh;
  margin: 0;
  font-family: "Helvetica", sans-serif;
  padding: 1rem;
  align-items: left;
  overflow: auto;
}

fieldset {
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: subgrid;
  gap: 0.5rem;
  padding: 0.75rem;

  p {
    grid-column: span 2;
    margin: 0;
  }
}

  </style>
  <nav>
<li>Color Mixer</li>

  </nav>
  <div class="clrcontrols" id="clrcontrols">
  <label for="clramount">Amount</label>
  <input type="range" min="0" max="100" id="clramount" />

  <label for="c1">Color 1</label>
  <input type="color" id="c1" value="#FF0000" data-clrcolor />

  <label for="c2">Color 2</label>
  <input type="color" id="c2" value="#0000FF" data-clrcolor />

  <fieldset>
    <p>Interpolation method</p>
    <input type="radio" id="shorter" name="method" value="shorter" checked />
    <label for="shorter">Shorter</label>
    <input type="radio" id="longer" name="method" value="longer" />
    <label for="longer">Longer</label>
  </fieldset>

  <fieldset>
    <p>Color space</p>
    <input type="radio" id="srgb" name="space" value="srgb" checked />
    <label for="srgb">srgb</label>

    <input type="radio" id="oklch" name="space" value="oklch" />
    <label for="oklch">oklch</label>

    <input type="radio" id="hsl" name="space" value="hsl" />
    <label for="hsl">hsl</label>
  </fieldset>
</div>


  `,
  appScripts: `
  const amountInput = document.querySelector("#clramount");
const colorInputs = document.querySelectorAll("[data-clrcolor]");
const colorSpaceInputs = [...document.querySelectorAll('[name="space"]')];
const methodInputs = [...document.querySelectorAll('[name="method"]')];

const setAmounts = (value) => {
  document.getElementById('clrcontrols').style.setProperty("--amount1", \`\${value}%\`);
  document.getElementById('clrcontrols').style.setProperty("--amount2", \`\${100 - value}%\`);
};

const getColorSpace = () => {
  const space = colorSpaceInputs.find((el) => el.checked).value;

  if (space === "srgb") return space;

  const method = methodInputs.find((el) => el.checked).value;

  return \`\${space} \${method} hue\`;
};



amountInput.addEventListener("input", (e) => {
  const { value } = e.target;
  setAmounts(value);
});

colorInputs.forEach((el) => {
  el.addEventListener("input", (e) => {
    const { id, value } = e.target;
    document.getElementById('clrcontrols').style.setProperty(\`--\${id}\`, value);

  });
});

const setColorSpace = () => {
  document.getElementById('clrcontrols').style.setProperty("--space", getColorSpace());
};

colorSpaceInputs.forEach((el) => {
  el.addEventListener("change", (e) => {
    const { value } = e.target;
    setColorSpace(value);
  });
});

methodInputs.forEach((el) => {
  el.addEventListener("change", () => {
    const space = colorSpaceInputs.find((el) => el.checked).value;
    setColorSpace();
  });
});

setAmounts(amountInput.value);
setColorSpace();

  `
},"file+icon");
violet.defineNewApp({
  image:"pie-chart",
  title:"Data Visualizer",
  appCode:`
  <br>
  <p style='margin:16px'>Cool lists and colors and tips are in this app.</p>
  <button>Start</button>
  <br>
  <div style="margin-left:auto;margin-right:auto;padding-left:25%">

  <p>Example pie chart:<p>
  <canvas id="myExampleChart" style="width:100%;max-width:600px"></canvas>
  </div>
  `,
  appScripts: `
  loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js",function (){
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
    
    new Chart("myExampleChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "World Wide Wine Production 2018"
        }
      }
    });
  });//,document.getElementById("xAppCon"));

  `
},"file+icon");
violet.defineNewApp({
  image:"https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
  title:"Weather",
  appCode:`
  <br>
  <p style='margin:16px'>Weather</p>
  <br>

  `,
  appScripts: `


  `
},"file+icon");
violet.defineNewApp({
  image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiIHZpZXdCb3g9IjAgMCAxMDAgMTI1IiB4PSIwcHgiIHk9IjBweCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIAogICAgLmZpbDAge2ZpbGw6YmxhY2t9CiAgIAogIDwvc3R5bGU+PC9kZWZzPjxnPjxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNNDcuODkyOSAyMS4yNTE3YzguMzc4ODEsLTAuMTE0NTY4IDE4LjU1MTcsMy43MDA0MiAyMy42MjcsOS4wNjg1OCA4LjkzNzQ3LDEuNTEwNjQgOC44ODU1LDE3Ljg5ODYgMTQuMTAxMywyNi4xOTU5bDYuNzI0MDcgMTAuNjk4NWMzLjQ5MDE4LDUuNTUzNTkgLTQuNjkwMTksMTQuNTQ4OSAtOC43MTA3LDEwLjA4NjcgLTIuODkzNzIsLTMuMjEwMjYgLTUuNzMzMTIsLTcuMDg5MDMgLTcuNzI5MTksLTExLjcxMDcgLTQuMTUzOTcsNi4wOTQ1NCAtMTMuNTczMywxMi4zMDQ4IC0yNS45MzEzLDEzLjEwMDkgLTExLjQ4ODcsMC43NDA1NTcgLTIxLjg2NTksLTUuNzY2MTkgLTI2LjE1NDUsLTEyLjQ3NzMgLTEuOTc3MTgsNC4zNDc2NyAtNC42OTEzOCw4LjAyMzI5IC03LjQ1MjgxLDExLjA4NzEgLTQuMDIxNjksNC40NjIyNCAtMTIuMjAyMSwtNC41MzMxMSAtOC43MTE4OCwtMTAuMDg2N2w2LjcyNTI1IC0xMC42OTg1YzUuMjQ3NjgsLTguMzQ4MSA1LjE2MTQ2LC0yNC44ODYgMTQuMjY1NSwtMjYuMjIxOSAzLjk5MDk4LC00LjcwNjczIDExLjMyOTIsLTguOTMzOTMgMTkuMjQ3NCwtOS4wNDI1OXptMTQuMjY1NSAxNi4zOTc0YzMuMTQ4ODQsMCAzLjg1NzUxLDQuNDQyMTYgMC44ODcwMTUsNS40MzY2NiA1LjAzMzksMS43NjEwNCA5LjE3NDg4LDQuNTA4MyAxMS44NTAxLDcuODU2NzVsLTIuMTE0MTkgLTE0LjUzMjRjLTAuMzk4MDM1LC0yLjczMDczIC0yLjY5MjkzLC01LjExNTM5IC00Ljc4NTg2LC02LjcyNzYxIC01LjI2MzAzLC00LjA1NDc2IC0xMy40MjIyLC02LjYzOTAzIC0yMC4wNzY1LC02LjU0ODA4IC00LjkyODc4LDAuMDY3MzIzNCAtOS44NzY0NiwxLjg5MjE0IC0xMy44NjAzLDQuNzU1MTYgLTIuNTk3MjYsMS44NjYxNiAtNi4wMzMxMiw1LjIxOTMzIC02LjU5NDE1LDguNTI4ODFsLTIuNDc0NDMgMTQuNjAwOWMyLjY3ODc2LC0zLjM4ODYxIDYuODU1MTcsLTYuMTY3NzcgMTEuOTM5OSwtNy45NDE3OSAtMi45NDY4NywtMS4wMjA0OCAtMi4yMjA0OSwtNS40MjgzOSAwLjkxMTgxOCwtNS40MjgzOSAyLjMyNzk3LDAgMy42MTE4NCwyLjY4MjMgMi4yMDk4Niw0LjQ5NTMxIDYuMzkzMzYsLTEuNjA1MTMgMTMuNTIyNSwtMS41OTkyMyAxOS45MTEyLDAuMDE2NTM1NiAtMS40MjIwNiwtMS44MTA2NCAtMC4xNDE3MzMsLTQuNTExODUgMi4xOTU2OSwtNC41MTE4NXptLTEzLjAzIDYuOTM1NDljNS40NjczNywwIDkuOTAwMDgsMy4xMDk4NyA5LjkwMDA4LDYuOTQzNzYgMCwzLjcxNTc4IC00LjE2MzQyLDYuNzUwMDUgLTkuMzk1NzQsNi45MzQzMWwwIDkuNDk5NjhjNC42ODE5MywxLjk3MzY0IDEwLjE1MTcsMS44NzkxNSAxNS4zMzMyLDEuMjQ2MDcgMC41Nzc1NjQsLTAuMDcwODY2NyAwLjY4NTA0NSwwLjgwNzg4IDAuMTA2MywwLjg3ODc0NyAtNS4zNDMzNSwwLjY1MTk3NCAtMTAuOTQzLDAuNzI5OTI3IC0xNS43ODc5LC0xLjMxMzQgLTQuNjQ1MzEsMi4xMDgyOCAtOS40NjQyNSwyLjgwMDQyIC0xNC41NzAyLDEuNzU4NjggLTAuNTY5Mjk2LC0wLjExNTc0OSAtMC4zOTIxMjksLTAuOTgwMzIzIDAuMTc3MTY3LC0wLjg2NDU3NCA0Ljg1NTU1LDAuOTkwOTUzIDkuNDI0MDksMC4zNTQzMzMgMTMuODU1NiwtMS42MjE2N2wwIC05LjU4Yy01LjI4OTAyLC0wLjE0MDU1MiAtOS41MTc0LC0zLjE5MzczIC05LjUxNzQsLTYuOTM3ODUgMCwtMy44MzM4OSA0LjQzMjcxLC02Ljk0Mzc2IDkuODk4OSwtNi45NDM3NnptLTI0LjE0MTkgLTkuOTAzNjJjLTMuOTMzMSw1LjE1MzE5IC00LjgyMDEyLDE2LjE2NzEgLTkuMDEzMDYsMjIuODM4bC02LjcyNTI1IDEwLjY5NzNjLTIuMzQwOTYsMy43MjUyMyAzLjQxNTc3LDEwLjM4MiA1LjcyMDEyLDcuODI0ODYgMi44OTEzNiwtMy4yMDc5IDUuOTYzNDMsLTcuNzQzMzcgNy43ODgyNSwtMTEuNzU5MSAtMC44OTg4MjYsLTEuOTUyMzggLTEuMTEzNzksLTMuNDM1ODUgLTAuOTkyMTM0LC01LjMwMzE5bC0wLjAzMTg5IDAgMy44NzY0MSAtMjIuODc0NmMwLjE3MjQ0MiwtMS4wMTU3NiAwLjU3NTIwMSwtMi4wODM0OCAxLjE3NTIxLC0zLjE2MDY1bC0xLjc5NzY1IDEuNzM3NDJ6bTUwLjAyNzIgMGwtMS4xNzc1NyAtMS4wOTk2MWMwLjQwNTEyMSwwLjgzMjY4NCAwLjY4MTUwMSwxLjY4NzgxIDAuODA3ODgsMi41NTgyOWwyLjgxMzQxIDE5LjMzNmMwLjQ5MjUyNCwxLjM5MzcxIDAuNzUzNTQ5LDIuODQ3NjYgMC43NTM1NDksNC4zNDI5NSAtMC4xMDI3NTcsMS4yNjI2MSAtMC41MzM4NjIsMi42MjkxNSAtMS4yNjE0Myw0LjAzMTEzIDEuODg4Niw0LjAyMTY5IDUuMjY2NTgsOS4wNjYyMSA4LjA4MjM1LDEyLjE5MTQgMi4zMDQzNSwyLjU1NzExIDguMDYxMDksLTQuMDk5NjQgNS43MjAxMiwtNy44MjQ4NmwtNi43MjQwNyAtMTAuNjk3M2MtNC4xOTI5NSwtNi42NzA5MiAtNS4wODExNCwtMTcuNjg0OCAtOS4wMTQyNCwtMjIuODM4em0xLjMxNDU4IDI1LjA1OTZjLTAuMDQwMTU3OCwtNS41NDQxNCAtNC4yMDM1OCwtOS44NjkzNyAtOC43NDAyMywtMTIuNTE3NCAtMTYuNjYxOSwtOS43MjUyNyAtNDMuNjk0LC0yLjMzMTUxIC00My45NjkyLDEyLjYyOTYgLTAuMDgwMzE1Niw0LjQxMTQ1IDQuMjY4NTQsOC44ODA3OCA3LjUyODQxLDExLjI4NjcgNS4zMjQ0NSwzLjkzMDc0IDEyLjA3NTcsNi4xMDE2MiAxOC43MDUzLDUuNjc0MDYgNi43NzM2OCwtMC40MzcwMTEgMTMuNTg3NSwtMi42ODExMiAxOS4wNTAyLC02Ljc2MTg2IDIuOTkyOTQsLTIuMjM1ODQgNy4wNTcxNCwtNi4zNDcyOSA3LjQyNTY1LC0xMC4zMTExeiIvPjwvZz48dGV4dCB4PSIwIiB5PSIxMTUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtc2l6ZT0iNXB4IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9IidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwtVW5pY29kZSwgQXJpYWwsIFNhbnMtc2VyaWYiPkNyZWF0ZWQgYnkgUmZvdXJ0eXR3bzwvdGV4dD48dGV4dCB4PSIwIiB5PSIxMjAiIGZpbGw9IiMwMDAwMDAiIGZvbnQtc2l6ZT0iNXB4IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9IidIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwtVW5pY29kZSwgQXJpYWwsIFNhbnMtc2VyaWYiPmZyb20gdGhlIE5vdW4gUHJvamVjdDwvdGV4dD48L3N2Zz4=",
  title:"Dogs and Pets",
  appCode:`
  <br>
  <p style='margin:16px'>Random stuff and info about dogs</p>
  <br>
  <div style="margin:auto;padding:10px;width:90%">
  <a href="https://placedog.net" target="_blank" id="doggycredits">From placedog.net</a>
  <button class="downloadbtn" id="doggydownload"><i class="fa fa-download"></i> Download</button>
  <button class="downloadbtn" id="doggyrefresh">Get another image</button>
  <br>
  <img id="cutiedoggyimg" src="https://placedog.net/640/480?r" alt="a picture of a dog" />
</div>
  `,
  appScripts: `
  var doggyDownloadBtn = document.getElementById('doggydownload');
  var doggyimg = document.getElementById('cutiedoggyimg');
  var doggycredits = document.getElementById('doggycredits');
  var doggyrefresh = document.getElementById('doggyrefresh');
  
  var currentImageBlob = null; // Variable to store the current image as a blob
  
  function doggy1() {
    // Generate random three-digit numbers ending with 0
    let num1 = Math.floor(Math.random() * 90 + 10) * 10; // Between 100 and 990
    let num2 = Math.floor(Math.random() * 90 + 10) * 10; // Between 100 and 990
    
    // Generate a random string for nocache
    let randomString = Math.random().toString(36).substring(2, 12);
  
    // Set the image source with the new random numbers and nocache
    var newImageUrl = "https://placedog.net/" + num1 + "/" + num2 + "?r&nocache=" + randomString;
    
    // Update the img element's src and store the image as a blob
    fetch(newImageUrl)
      .then(response => response.blob())  // Fetch image as blob
      .then(blob => {
        currentImageBlob = blob;  // Store the blob
        
        // Convert the blob to a Data URL and update the image source
        convertBlobToDataUrl(blob).then(dataUrl => {
          doggyimg.src = dataUrl;  // Update the displayed image
        }).catch(error => console.error('Error converting blob to Data URL:', error));
      })
      .catch(error => console.error('Error fetching the image:', error));
  }
  
  doggyrefresh.onclick = doggy1;
  doggy1();
  function doggy2() {
    // Ensure that there's an image to download
    if (currentImageBlob) {
      // Create a URL for the blob (so it can be used as a downloadable link)
      var blobUrl = URL.createObjectURL(currentImageBlob);
      
      // Create a temporary link element
      var link = document.createElement('a');
      
      // Set the download attribute to specify the filename
      link.download = 'dog_image.jpg';  // You can change the file name here
      
      // Set the href to the blob URL
      link.href = blobUrl;
      
      // Trigger a click event on the link to start the download
      link.click();
      
      // Optionally, revoke the blob URL after download to free memory
      URL.revokeObjectURL(blobUrl);
    } else {
      alert("No image available to download!");
    }
  }
  
  doggyDownloadBtn.onclick = doggy2;
  
  `
},"file+iconwhite");
}

function vSearch() {
  swal("Search:", {
    content: "input",
  })
  .then((value) => {
    localStorage.setItem("lastSearch",`${value}`);
    swal(`You typed: ${value}`);
  });
}
function vExtensions() {
  if(window.violetexts == true) {
    // idk
  } else {
    swal("Extensions are not available right now.");
  }
}
function userRunApp(apptitle) {
  var ahhh = violet.getAppInfoToRun(apptitle);
  var weee = document.getElementById("xAppSpace");
  var weeee = document.getElementById("xAppCon");
  var weooo = document.getElementById("xAppHTitle");
  weee.style.display = "block";
  weooo.innerHTML = "App: " + ahhh.title;
  weeee.innerHTML = ahhh.appCode;
    // If the app has scripts, then run em
    if (ahhh.appScripts) {
      try {
        new Function(ahhh.appScripts)(); // Executes the script
      } catch (error) {
        console.error("Error executing app script:", error);
      }
    }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
function w3CodeColor(elmnt, mode) {
  var lang = (mode || "html");
  var elmntObj = (document.getElementById(elmnt) || elmnt);
  var elmntTxt = elmntObj.innerHTML;
  var tagcolor = "mediumblue";
  var tagnamecolor = "brown";
  var attributecolor = "red";
  var attributevaluecolor = "mediumblue";
  var commentcolor = "green";
  var cssselectorcolor = "brown";
  var csspropertycolor = "red";
  var csspropertyvaluecolor = "mediumblue";
  var cssdelimitercolor = "black";
  var cssimportantcolor = "red";  
  var jscolor = "black";
  var jskeywordcolor = "mediumblue";
  var jsstringcolor = "brown";
  var jsnumbercolor = "red";
  var jspropertycolor = "black";
  elmntObj.style.fontFamily = "Fira Code, Consolas,'Courier New', monospace";
  if (!lang) {lang = "html"; }
  if (lang == "html") {elmntTxt = htmlMode(elmntTxt);}
  if (lang == "css") {elmntTxt = cssMode(elmntTxt);}
  if (lang == "js") {elmntTxt = jsMode(elmntTxt);}
  elmntObj.innerHTML = elmntTxt;

  function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e == -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));      
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
  }
  function htmlMode(txt) {
    var rest = txt, done = "", php, comment, angular, startpos, endpos, note, i;
    comment = new extract(rest, "&lt;!--", "--&gt;", commentMode, "W3HTMLCOMMENTPOS");
    rest = comment.rest;
    while (rest.indexOf("&lt;") > -1) {
      note = "";
      startpos = rest.indexOf("&lt;");
      if (rest.substr(startpos, 9).toUpperCase() == "&LT;STYLE") {note = "css";}
      if (rest.substr(startpos, 10).toUpperCase() == "&LT;SCRIPT") {note = "javascript";}        
      endpos = rest.indexOf("&gt;", startpos);
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += tagMode(rest.substring(startpos, endpos + 4));
      rest = rest.substr(endpos + 4);
      if (note == "css") {
        endpos = rest.indexOf("&lt;/style&gt;");
        if (endpos > -1) {
          done += cssMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
      if (note == "javascript") {
        endpos = rest.indexOf("&lt;/script&gt;");
        if (endpos > -1) {
          done += jsMode(rest.substring(0, endpos));
          rest = rest.substr(endpos);
        }
      }
    }
    rest = done + rest;
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3HTMLCOMMENTPOS", comment.arr[i]);
    }
    return rest;
  }
  function tagMode(txt) {
    var rest = txt, done = "", startpos, endpos, result;
    while (rest.search(/(\s|<br>)/) > -1) {    
      startpos = rest.search(/(\s|<br>)/);
      endpos = rest.indexOf("&gt;");
      if (endpos == -1) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeMode(rest.substring(startpos, endpos));
      rest = rest.substr(endpos);
    }
    result = done + rest;
    result = "<span style=color:" + tagcolor + ">&lt;</span>" + result.substring(4);
    if (result.substr(result.length - 4, 4) == "&gt;") {
      result = result.substring(0, result.length - 4) + "<span style=color:" + tagcolor + ">&gt;</span>";
    }
    return "<span style=color:" + tagnamecolor + ">" + result + "</span>";
  }
  function attributeMode(txt) {
    var rest = txt, done = "", startpos, endpos, singlefnuttpos, doublefnuttpos, spacepos;
    while (rest.indexOf("=") > -1) {
      endpos = -1;
      startpos = rest.indexOf("=");
      singlefnuttpos = rest.indexOf("'", startpos);
      doublefnuttpos = rest.indexOf('"', startpos);
      spacepos = rest.indexOf(" ", startpos + 2);
      if (spacepos > -1 && (spacepos < singlefnuttpos || singlefnuttpos == -1) && (spacepos < doublefnuttpos || doublefnuttpos == -1)) {
        endpos = rest.indexOf(" ", startpos);      
      } else if (doublefnuttpos > -1 && (doublefnuttpos < singlefnuttpos || singlefnuttpos == -1) && (doublefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf('"', rest.indexOf('"', startpos) + 1);
      } else if (singlefnuttpos > -1 && (singlefnuttpos < doublefnuttpos || doublefnuttpos == -1) && (singlefnuttpos < spacepos || spacepos == -1)) {
        endpos = rest.indexOf("'", rest.indexOf("'", startpos) + 1);
      }
      if (!endpos || endpos == -1 || endpos < startpos) {endpos = rest.length;}
      done += rest.substring(0, startpos);
      done += attributeValueMode(rest.substring(startpos, endpos + 1));
      rest = rest.substr(endpos + 1);
    }
    return "<span style=color:" + attributecolor + ">" + done + rest + "</span>";
  }
  function attributeValueMode(txt) {
    return "<span style=color:" + attributevaluecolor + ">" + txt + "</span>";
  }
  function commentMode(txt) {
    return "<span style=color:" + commentcolor + ">" + txt + "</span>";
  }
  function cssMode(txt) {
    var rest = txt, done = "", s, e, comment, i, midz, c, cc;
    comment = new extract(rest, /\/\*/, "*/", commentMode, "W3CSSCOMMENTPOS");
    rest = comment.rest;
    while (rest.search("{") > -1) {
      s = rest.search("{");
      midz = rest.substr(s + 1);
      cc = 1;
      c = 0;
      for (i = 0; i < midz.length; i++) {
        if (midz.substr(i, 1) == "{") {cc++; c++}
        if (midz.substr(i, 1) == "}") {cc--;}
        if (cc == 0) {break;}
      }
      if (cc != 0) {c = 0;}
      e = s;
      for (i = 0; i <= c; i++) {
        e = rest.indexOf("}", e + 1);
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s + 1);
      done += cssPropertyMode(rest.substring(s + 1, e));
      rest = rest.substr(e);
    }
    rest = done + rest;
    rest = rest.replace(/{/g, "<span style=color:" + cssdelimitercolor + ">{</span>");
    rest = rest.replace(/}/g, "<span style=color:" + cssdelimitercolor + ">}</span>");
    for (i = 0; i < comment.arr.length; i++) {
        rest = rest.replace("W3CSSCOMMENTPOS", comment.arr[i]);
    }
    return "<span style=color:" + cssselectorcolor + ">" + rest + "</span>";
  }
  function cssPropertyMode(txt) {
    var rest = txt, done = "", s, e, n, loop;
    if (rest.indexOf("{") > -1 ) { return cssMode(rest); }
    while (rest.search(":") > -1) {
      s = rest.search(":");
      loop = true;
      n = s;
      while (loop == true) {
        loop = false;
        e = rest.indexOf(";", n);
        if (rest.substring(e - 5, e + 1) == "&nbsp;") {
          loop = true;
          n = e + 1;
        }
      }
      if (e == -1) {e = rest.length;}
      done += rest.substring(0, s);
      done += cssPropertyValueMode(rest.substring(s, e + 1));
      rest = rest.substr(e + 1);
    }
    return "<span style=color:" + csspropertycolor + ">" + done + rest + "</span>";
  }
  function cssPropertyValueMode(txt) {
    var rest = txt, done = "", s;
    rest = "<span style=color:" + cssdelimitercolor + ">:</span>" + rest.substring(1);
    while (rest.search(/!important/i) > -1) {
      s = rest.search(/!important/i);
      done += rest.substring(0, s);
      done += cssImportantMode(rest.substring(s, s + 10));
      rest = rest.substr(s + 10);
    }
    result = done + rest;    
    if (result.substr(result.length - 1, 1) == ";" && result.substr(result.length - 6, 6) != "&nbsp;" && result.substr(result.length - 4, 4) != "&lt;" && result.substr(result.length - 4, 4) != "&gt;" && result.substr(result.length - 5, 5) != "&amp;") {
      result = result.substring(0, result.length - 1) + "<span style=color:" + cssdelimitercolor + ">;</span>";
    }
    return "<span style=color:" + csspropertyvaluecolor + ">" + result + "</span>";
  }
  function cssImportantMode(txt) {
    return "<span style=color:" + cssimportantcolor + ";font-weight:bold;>" + txt + "</span>";
  }
  function jsMode(txt) {
    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc == "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;
    while (y == 1) {
      sfnuttpos = getPos(rest, "'", "'", jsStringMode);
      dfnuttpos = getPos(rest, '"', '"', jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);      
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
      if (mypos[0] == -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span style=color:" + jscolor + ">" + rest + "</span>";
  }
  function jsStringMode(txt) {
    return "<span style=color:" + jsstringcolor + ">" + txt + "</span>";
  }
  function jsKeywordMode(txt) {
    return "<span style=color:" + jskeywordcolor + ">" + txt + "</span>";
  }
  function jsNumberMode(txt) {
    return "<span style=color:" + jsnumbercolor + ">" + txt + "</span>";
  }
  function jsPropertyMode(txt) {
    return "<span style=color:" + jspropertycolor + ">" + txt + "</span>";
  }
  function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
  }
  function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length == 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length == 0) {arr = arguments[i];}
    return arr;
  }
  function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ == "js") {
      words = ["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete",
      "do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import",
      "in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static",
      "super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos == -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      } 
    }
    return [rpos, rpos2, func];
  }
  function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e == -1) {e = txt.length;}
    return [s, e + (end.length), func];
  }
  function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c == arr[j]) {
          if (c == "-" && (txt.substr(i - 1, 1) == "e" || txt.substr(i - 1, 1) == "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }  
    return [-1, -1, func];
  }  
}
