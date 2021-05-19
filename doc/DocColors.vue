<template>
  <div class="customize-colors doc">
    <div class="doc-item">
      <h2>Colors</h2>
      <p>
        Vuecore use variable CSS for style components. It's easy customize to
        your style.
      </p>
    </div>
    <div class="doc-item">
      <h2 id="primary-color">Primary Color</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in primary" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div class="rect-board" :style="{ background: item.hex }"></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="dark">Dark</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in dark" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="light">Light</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in light" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="red">Red</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in red" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="green">Green</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in green" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="blue">Blue</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in blue" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="yellow">Yellow</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in yellow" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-item">
      <h2 id="teal">Teal</h2>
      <div class="frame-bg">
        <div class="rect-item" v-for="item in teal" :key="item.var">
          <div class="rect-label">{{ item.name }}</div>
          <div
            class="rect-board"
            :style="{
              background: item.type ? '' : item.hex,
              border: item.type ? `1px solid ${item.hex}` : ''
            }"
          ></div>
          <div class="fm-rgb">
            <span>RBG</span>
            <span class="rect-val">{{ item.rgb }}</span>
          </div>
          <div class="fm-hsl">
            <span>HSL</span>
            <span class="rect-val">{{ item.hsl }}</span>
          </div>
          <div class="fm-hex">
            <span>HEX</span>
            <span class="rect-val">{{ item.hex }}</span>
          </div>
          <div class="fm-var">
            <span>VAR</span>
            <span class="rect-val">{{ item.var }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      primary: {
        darker: {
          name: "Darker",
          rgb: "53 104 212",
          hsl: "221 65 52",
          hex: "#3568d4",
          var: "--main-darker"
        },
        main: {
          name: "Main Color",
          rgb: "62 123 250",
          hsl: "221 95 61",
          hex: "#3e7bfa",
          var: "--main-color"
        },
        lighter: {
          name: "Lighter",
          rgb: "102 152 255",
          hsl: "220 100 70",
          hex: "#6698ff",
          var: "--main-lighter"
        },
        subtle: {
          name: "Subtle",
          rgb: "204 221 155",
          hsl: "200 100 90",
          hex: "#ccddff",
          var: "--main-subtle"
        }
      },
      dark: {
        dark0: {
          name: "Dark-0",
          hex: "#1c1c28",
          rgb: "28 28 40",
          hsl: "240 18 13",
          var: "--dark-0"
        },
        dark1: {
          name: "Dark-1",
          hex: "#28293d",
          rgb: "40 41 61",
          hsl: "237 21 20",
          var: "--dark-1"
        },
        dark2: {
          name: "Dark-2",
          hex: "#555770",
          rgb: "85 87 112",
          hsl: "236 14 39",
          var: "--dark-2"
        },
        dark3: {
          name: "Dark-3",
          hex: "#8f90a6",
          rgb: "143 144 166",
          hsl: "237 11 61",
          var: "--dark-3"
        },
        dark4: {
          name: "Dark-4",
          hex: "#c7c9d9",
          rgb: "199 201 217",
          hsl: "233 19 82",
          var: "--dark-4"
        },
        darkOutline: {
          name: "Dark Outline",
          hex: "#8f90a6",
          rgb: "143 144 166",
          hsl: "237 11 61",
          var: "--dark-outline",
          type: "outline"
        }
      },
      light: {
        light0: {
          name: "Light-0",
          hex: "#e4e4eb",
          rgb: "228 228 235",
          hsl: "249 15 91",
          var: "--light-0"
        },
        light1: {
          name: "Light-1",
          hex: "#ebebf0",
          rgb: "235 235 240",
          hsl: "240 14 93",
          var: "--light-1"
        },
        light2: {
          name: "Light-2",
          hex: "#f2f2f5",
          rgb: "242 242 245",
          hsl: "240 13 95",
          var: "--light-2"
        },
        light3: {
          name: "Light-3",
          hex: "#fafafc",
          rgb: "250 250 252",
          hsl: "240 25 98",
          var: "--light-3"
        },
        light4: {
          name: "Light-4",
          hex: "#ffffff",
          rgb: "255 255 255",
          hsl: "0 0 100",
          var: "--light-4"
        },
        lightOutline: {
          name: "Light Outline",
          hex: "#e4e4eb",
          rgb: "228 228 235",
          hsl: "240 15 91",
          var: "--light-outline",
          type: "outline"
        }
      },
      red: {
        red0: {
          name: "Red-0",
          hex: "#e63535",
          rgb: "230 53 53",
          hsl: "0 78 55",
          var: "--red-0"
        },
        red1: {
          name: "Red-1",
          hex: "#ff3b3b",
          rgb: "255 59 59",
          hsl: "0 100 62",
          var: "--red-1"
        },
        red2: {
          name: "Red-2",
          hex: "#ff5c5c",
          rgb: "255 92 92",
          hsl: "0 100 68",
          var: "--red-2"
        },
        red3: {
          name: "Red-3",
          hex: "#ff8080",
          rgb: "255 128 128",
          hsl: "0 100 75",
          var: "--red-3"
        },
        red4: {
          name: "Red-4",
          hex: "#ffe6e6",
          rgb: "255 230 230",
          hsl: "0 100 95",
          var: "--red-4"
        },
        redOutline: {
          name: "Red Outline",
          hex: "#ff3b3b",
          rgb: "255 59 59",
          hsl: "0 100 62",
          var: "--red-outline",
          type: "outline"
        }
      },
      green: {
        green0: {
          name: "Green-0",
          hex: "#05a660",
          rgb: "5 166 96",
          hsl: "154 94 34",
          var: "--green-0"
        },
        green1: {
          name: "Green-1",
          hex: "#06c270",
          rgb: "6 194 112",
          hsl: "154 94 39",
          var: "--green-1"
        },
        green2: {
          name: "Green-2",
          hex: "#39d98a",
          rgb: "57 217 138",
          hsl: "150 68 54",
          var: "--green-2"
        },
        green3: {
          name: "Green-3",
          hex: "#57eba1",
          rgb: "87 235 161",
          hsl: "150 79 63",
          var: "--green-3"
        },
        green4: {
          name: "Green-4",
          hex: "#e3fff1",
          rgb: "227 255 241",
          hsl: "150 100 95",
          var: "--green-4"
        },
        greenOutline: {
          name: "Green Outline",
          hex: "#06c270",
          rgb: "6 194 112",
          hsl: "154 94 39",
          var: "--green-outline",
          type: "outline"
        }
      },
      blue: {
        blue0: {
          name: "Blue-0",
          hex: "#004fc4",
          rgb: "0 79 196",
          hsl: "216 100 38",
          var: "--blue-0"
        },
        blue1: {
          name: "Blue-1",
          hex: "#0063f7",
          rgb: "0 99 247",
          hsl: "216 100 48",
          var: "--blue-1"
        },
        blue2: {
          name: "Blue-2",
          hex: "#5b8def",
          rgb: "91 141 239",
          hsl: "220 82 65",
          var: "--blue-2"
        },
        blue3: {
          name: "Blue-3",
          hex: "#9dbff9",
          rgb: "157 191 249",
          hsl: "218 88 80",
          var: "--blue-3"
        },
        blue4: {
          name: "Blue-4",
          hex: "#e5f0ff",
          rgb: "229 240 255",
          hsl: "215 100 95",
          var: "--blue-4"
        },
        blueOutline: {
          name: "Blue Outline",
          hex: "#0063f7",
          rgb: "0 99 247",
          hsl: "216 100 48",
          var: "--blue-outline",
          type: "outline"
        }
      },
      yellow: {
        yellow0: {
          name: "Yellow-0",
          hex: "#e6b800",
          rgb: "230 184 0",
          hsl: "48 100 45",
          var: "--yellow-0"
        },
        yellow1: {
          name: "Yellow-1",
          hex: "#ffcc00",
          rgb: "255 204 0",
          hsl: "48 100 50",
          var: "--yellow-1"
        },
        yellow2: {
          name: "Yellow-2",
          hex: "#fddd48",
          rgb: "253 221 72",
          hsl: "49 98 64",
          var: "--yellow-2"
        },
        yellow3: {
          name: "Yellow-3",
          hex: "#fded72",
          rgb: "253 237 114",
          hsl: "53 97 72",
          var: "--yellow-3"
        },
        yellow4: {
          name: "Yellow-4",
          hex: "#fffee6",
          rgb: "255 254 230",
          hsl: "58 100 95",
          var: "--yellow-4"
        },
        yellowOutline: {
          name: "Yellow Outline",
          hex: "#ffcc00",
          rgb: "255 204 0",
          hsl: "48 100 50",
          var: "--yellow-outline",
          type: "outline"
        }
      },
      teal: {
        teal0: {
          name: "Teal-0",
          hex: "#00b7c4",
          rgb: "0 183 196",
          hsl: "184 100 38",
          var: "--teal-0"
        },
        teal1: {
          name: "Teal-1",
          hex: "#00cfde",
          rgb: "0 207 222",
          hsl: "184 100 44",
          var: "--teal-1"
        },
        teal2: {
          name: "Teal-2",
          hex: "#73dfe7",
          rgb: "115 223 231",
          hsl: "184 71 68",
          var: "--teal-2"
        },
        teal3: {
          name: "Teal-3",
          hex: "#a9eff2",
          rgb: "169 239 242",
          hsl: "184 74 81",
          var: "--teal-3"
        },
        teal4: {
          name: "Teal-4",
          hex: "#e6ffff",
          rgb: "230 255 255",
          hsl: "180 100 95",
          var: "--teal-4"
        },
        tealOutline: {
          name: "Teal Outline",
          hex: "#00cfde",
          rgb: "0 207 222",
          hsl: "184 100 44",
          var: "--teal-outline",
          type: "outline"
        }
      }
    };
  }
};
</script>
