<template>
  <div class="doc-button doc-component doc">
    <div class="doc-header doc-item">
      <h2>Buttons</h2>
      <p>To trigger an operation.</p>
    </div>
    <div class="doc-item">
      <h2 id="filled">Filled</h2>
      <p>
        There are <code>type</code> default of button. You can set directive
        <code>type="filled"</code>.
      </p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showFilled"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button>Primary</vc-button>
            <vc-button color="success">Success</vc-button>
            <vc-button color="danger">Danger</vc-button>
            <vc-button color="warning">Warning</vc-button>
            <vc-button color="dark">Dark</vc-button>
            <vc-button color="info">Info</vc-button>
            <vc-button disabled>Disabled</vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showFilled }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <span>Primary</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Success</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">danger</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Danger</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">warning</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Warning</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">dark</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Dark</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">info</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Info</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;disabled</span>
          <span class="pl-p">></span>
          <span>Disabled</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="outline">Outline</h2>
      <p>Set directive <code>type="outline"</code>.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showOutline"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button type="outline">Primary</vc-button>
            <vc-button type="outline" color="success">Success</vc-button>
            <vc-button type="outline" color="danger">Danger</vc-button>
            <vc-button type="outline" color="warning">Warning</vc-button>
            <vc-button type="outline" color="dark">Dark</vc-button>
            <vc-button type="outline" color="info">Info</vc-button>
            <vc-button type="outline" disabled>Disabled</vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showOutline }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Primary</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Success</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">danger</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Danger</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">warning</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Warning</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">dark</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Dark</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">info</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Info</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">outline</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;disabled</span>
          <span class="pl-p">></span>
          <span>Disabled</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="line">Line</h2>
      <p>Set directive <code>type="line"</code>.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showLine"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button type="line">Primary</vc-button>
            <vc-button type="line" color="success" line-position="top">
              Success
            </vc-button>
            <vc-button type="line" color="danger">Danger</vc-button>
            <vc-button type="line" color="warning" line-position="top">
              Warning
            </vc-button>
            <vc-button type="line" color="dark">Dark</vc-button>
            <vc-button type="line" color="info" line-position="top">
              Info
            </vc-button>
            <vc-button type="line" disabled>Disabled</vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showLine }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Primary</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;line-position</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">top</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Success</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">danger</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Danger</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">warning</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;line-position</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">top</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Warning</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">dark</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Dark</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">danger</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Danger</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">info</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;line-position</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">top</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Info</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;type</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">line</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;disabled</span>
          <span class="pl-p">></span>
          <span>Disabled</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="text-color">Text color</h2>
      <p>
        You can custom text color for button.Need to prop
        <code>text-color</code> for button.
      </p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showTextColor"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button text-color="#fafafa">Primary</vc-button>
            <vc-button text-color="#fafafa" color="success">Success</vc-button>
            <vc-button text-color="#fafafa" color="danger">Danger</vc-button>
            <vc-button text-color="#fafafa" color="warning">Warning</vc-button>
            <vc-button text-color="#fafafa" color="dark">Dark</vc-button>
            <vc-button text-color="#fafafa" color="info">Info</vc-button>
            <vc-button text-color="#fafafa" disabled>Disabled</vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showTextColor }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-p">"></span>
          <span>Primary</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">="</span>
          <span class="pl-s">success</span>
          <span class="pl-p">"></span>
          <span>Success</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">="</span>
          <span class="pl-s">danger</span>
          <span class="pl-p">"></span>
          <span>Danger</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">="</span>
          <span class="pl-s">warning</span>
          <span class="pl-p">"></span>
          <span>Warning</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">="</span>
          <span class="pl-s">dark</span>
          <span class="pl-p">"></span>
          <span>Dark</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;color</span>
          <span class="pl-p">="</span>
          <span class="pl-s">info</span>
          <span class="pl-p">"></span>
          <span>Info</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;text-color</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">#fafafa</span>
          <span class="pl-k">&nbsp;disabled</span>
          <span class="pl-s"></span>
          <span class="pl-p">"></span>
          <span>Disabled</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="size">Size</h2>
      <p>Need to prop <code>size</code> for button.</p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showSize"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button size="large">Large</vc-button>
            <vc-button size="medium">Medium</vc-button>
            <vc-button size="small">Small</vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showSize }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;size</span>
          <span class="pl-p">="</span>
          <span class="pl-s">large</span>
          <span class="pl-p">"></span>
          <span>Large</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;size</span>
          <span class="pl-p">="</span>
          <span class="pl-s">medium</span>
          <span class="pl-p">"></span>
          <span>Medium</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;size</span>
          <span class="pl-p">="</span>
          <span class="pl-s">small</span>
          <span class="pl-p">"></span>
          <span>Small</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="href">Href</h2>
      <p>
        Prop <code>href</code> if operation need next url. Set prop
        <code>blank</code> url will next new tap.
      </p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showHref"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button href="https://vuecore.vercel.app">
              Open current tap</vc-button
            >
            <vc-button href="https://vuecore.vercel.app" blank>
              Open new tap</vc-button
            >
          </div>
        </div>
        <pre :class="{ 'pre-show': showHref }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;href</span>
          <span class="pl-p">"</span>
          <span class="pl-s">https://vuecore.vercel.app</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Open current tap</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;href</span>
          <span class="pl-p">"</span>
          <span class="pl-s">https://vuecore.vercel.app</span>
          <span class="pl-p">"</span>
          <span class="pl-k">&nbsp;blank</span>
          <span class="pl-p">></span>
          <span>Open new tap</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="router">Router</h2>
      <p>
        Feature support programmatic navigation. Prop <code>router</code> can be
        literal string path or object.
      </p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showRouter"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button router="/">Literal string path</vc-button>
            <vc-button :router="{ path: '/' }">Object</vc-button>
            <vc-button :router="{ name: 'home' }">Named route</vc-button>
            <vc-button :router="{ path: '/', query: { plan: 'private' } }">
              With query
            </vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showRouter }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;router</span>
          <span class="pl-p">"</span>
          <span class="pl-s">/</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Literal string path</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-k">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;:router</span>
          <span class="pl-p">"</span>
          <span class="pl-s">{&nbsp;path: '/'&nbsp;}</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Object</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-k">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;:router</span>
          <span class="pl-p">"</span>
          <span class="pl-s">{&nbsp;name: 'home'&nbsp;}</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Named route</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-k">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;:router</span>
          <span class="pl-p">"</span>
          <span class="pl-s">{&nbsp;path: '/',&nbsp;query:&nbsp;{&nbsp;plan:&nbsp;'private'}&nbsp;}</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Named route</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-k">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="loading">Loading</h2>
      <p>
        A loading indicator can be added to a button by prop
        <code>loading</code> on the Button.
      </p>
      <div class="show">
        <div class="show-code-icon">
          <IconCode :show.sync="showLoading"></IconCode>
        </div>
        <div class="demo">
          <div class="d-flex align-items-center justify-content-evenly">
            <vc-button loading size="large">Loading</vc-button>
            <vc-button loading>Loading</vc-button>
            <vc-button loading size="small">Loading</vc-button>
            <vc-button loading></vc-button>
          </div>
        </div>
        <pre :class="{ 'pre-show': showLoading }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;loading</span>
          <span class="pl-k">&nbsp;size</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">large</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Loading</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;loading</span>
          <span class="pl-p">></span>
          <span>Loading</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;loading</span>
          <span class="pl-k">&nbsp;size</span>
          <span class="pl-p">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">small</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <span>Loading</span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-k">&nbsp;loading</span>
          <span class="pl-p">></span>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-button</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-api doc-item">
      <h2 id="api">API</h2>
      <p>To get customized button, just set prop <code>property</code>.</p>
      <div class="doc-table">
        <table>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
          <tr>
            <td class="pl-k">type</td>
            <td>
              type of button to use.&nbsp;<span class="pl-v"
                >filled / outline / line</span
              >.
            </td>
            <td class="pl-t">string</td>
            <td class="pl-s">filled</td>
          </tr>
          <tr>
            <td class="pl-k">text-color</td>
            <td>
              customized text color of button.
            </td>
            <td class="pl-t">string</td>
            <td class="pl-s">_</td>
          </tr>
          <tr>
            <td class="pl-k">color</td>
            <td>
              color of button. &nbsp;<span class="pl-v">
                primary / success / danger / warning / dark / info </span
              >.
            </td>
            <td class="pl-t">string</td>
            <td class="pl-s">primary</td>
          </tr>
          <tr>
            <td class="pl-k">line-position</td>
            <td>
              line position when set type&nbsp;<span class="pl-v">line</span
              >&nbsp;for button.&nbsp;<span class="pl-v">top / bottom</span
              >&nbsp;
            </td>
            <td class="pl-t">string</td>
            <td class="pl-s">bottom</td>
          </tr>
          <tr>
            <td class="pl-k">size</td>
            <td>
              Set size of button.&nbsp;<span class="pl-v"
                >large / medium / small</span
              >
            </td>
            <td class="pl-t">string</td>
            <td class="pl-s">medium</td>
          </tr>
          <tr>
            <td class="pl-k">disabled</td>
            <td>disabled state of button.</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">false</td>
          </tr>
          <tr>
            <td class="pl-k">bubble</td>
            <td>determine event click has bubble up.</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">true</td>
          </tr>
          <tr>
            <td class="pl-k">href</td>
            <td>link href when click button.</td>
            <td class="pl-t">string</td>
            <td class="pl-s">_</td>
          </tr>
          <tr>
            <td class="pl-k">blank</td>
            <td>
              option whatever open current tap or new tap. Default open current
              tap
            </td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">false</td>
          </tr>
          <tr>
            <td class="pl-k">router</td>
            <td>
              Added router push navigation to button
            </td>
            <td class="pl-t">string | object</td>
            <td class="pl-s">_</td>
          </tr>
          <tr>
            <td class="pl-k">loading</td>
            <td>set the loading status of button</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">false</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import IconCode from "./IconCode.vue";

export default {
  components: {
    IconCode
  },
  data: () => {
    return {
      showFilled: false,
      showOutline: false,
      showLine: false,
      showTextColor: false,
      showSize: false,
      showHref: false,
      showRouter: false,
      showLoading: false,
      showIcon: false
    };
  }
};
</script>
