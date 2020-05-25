<h1 align="center">Atom-Browser</h1>

<p align="center">
  <img src="images/atom-browser.jpg" width="490px" height="340px" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/leandro-wrf/atom-browser?color=000&style=for-the-badge" />

  <img src="https://img.shields.io/github/license/leandro-wrf/atom-browser?color=000&style=for-the-badge" />
</p>

<p>My first application in <a href="https://www.electronjs.org/">ElectronJs</a>.
</p>

<p>
  I'm use electron-forge to create my applications.
  For the creation of debian / ubuntu packages some dependencies are needed:
</p>

    # Install dependencies debian/ubuntu
    sudo apt install fakeroot unzip


<h1>How to usage</h1>

    # Clone this repo:
    
    git clone https://github.com/leanro-wrf/atom-browser

    # Open project and install dependecies
    # with yarnpkg

    cd atom-browser && yarn

    # with npmjs

    cd atom-browser && npm install

    # Build application Windows or Debian/Ubuntu

    yarn make

<h1>LICENSE</h1>

<p>License MIT.</p>
