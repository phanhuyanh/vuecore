<template>
  <div class="doc-component doc doc-accordion">
    <div class="doc-item">
      <h2 id="example">Example</h2>
      <div class="show">
        <div class="demo">
          <vc-accordion>
            <vc-accordion-item title="Accordion Item 1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              sapiente illo sint ea rerum. Quod minima accusamus ea deserunt
              delectus laudantium, nihil id officiis nesciunt! Ut delectus
              architecto eum omnis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, eveniet. Ipsa, accusantium fuga repellat
              reiciendis adipisci illo, tempora dolores sit voluptatibus
              blanditiis tenetur esse velit voluptate totam quae officiis.
              Sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, eveniet. Ipsa, accusantium fuga repellat reiciendis adipisci
              illo, tempora dolores sit voluptatibus blanditiis tenetur esse
              velit voluptate totam quae officiis. Sunt? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Modi, eveniet. Ipsa,
              accusantium fuga repellat reiciendis adipisci illo, tempora
              dolores sit voluptatibus blanditiis tenetur esse velit voluptate
              totam quae officiis. Sunt?
            </vc-accordion-item>
            <vc-accordion-item title="Accordion Item 2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              eveniet. Ipsa, accusantium fuga repellat reiciendis adipisci illo,
              tempora dolores sit voluptatibus blanditiis tenetur esse velit
              voluptate totam quae officiis. Sunt? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi, eveniet. Ipsa, accusantium
              fuga repellat reiciendis adipisci illo, tempora dolores sit
              voluptatibus blanditiis tenetur esse velit voluptate totam quae
              officiis. Sunt? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, eveniet. Ipsa, accusantium fuga repellat reiciendis
              adipisci illo, tempora dolores sit voluptatibus blanditiis tenetur
              esse velit voluptate totam quae officiis. Sunt?</vc-accordion-item
            >
            <vc-accordion-item title="Accordion Item 3"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quibusdam placeat sed autem? Quo voluptatem quas alias enim
              deleniti nisi. Ab quidem recusandae exercitationem doloribus,
              necessitatibus temporibus magni laboriosam ex. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Modi, eveniet. Ipsa,
              accusantium fuga repellat reiciendis adipisci illo, tempora
              dolores sit voluptatibus blanditiis tenetur esse velit voluptate
              totam quae officiis. Sunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, eveniet. Ipsa, accusantium fuga repellat
              reiciendis adipisci illo, tempora dolores sit voluptatibus
              blanditiis tenetur esse velit voluptate totam quae officiis. Sunt?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              eveniet. Ipsa, accusantium fuga repellat reiciendis adipisci illo,
              tempora dolores sit voluptatibus blanditiis tenetur esse velit
              voluptate totam quae officiis. Sunt?</vc-accordion-item
            >
          </vc-accordion>
        </div>
        <div class="show-code-icon">
          <icon-code :show.sync="show"></icon-code>
        </div>
        <pre :class="{ 'pre-show': show }">
          <span class="pl-p"><</span>
          <span class="pl-t">vc-accordion</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-1 pl-p"><</span>
          <span class="pl-t">vc-accordion-item</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Accordion Item 1</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="text pl-tab-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quaerat, odit, deleniti omnis animi assumenda esse nulla est neque praesentium ab sunt voluptatum voluptatem itaque cum consequatur dicta illum libero.</span>
          <span class="pl-p pl-tab-1"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-accordion-item</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-1 pl-p"><</span>
          <span class="pl-t">vc-accordion-item</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Accordion Item 2</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="text pl-tab-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quaerat, odit, deleniti omnis animi assumenda esse nulla est neque praesentium ab sunt voluptatum voluptatem itaque cum consequatur dicta illum libero.</span>
          <span class="pl-p pl-tab-1"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-accordion-item</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-tab-1 pl-p"><</span>
          <span class="pl-t">vc-accordion-item</span>
          <span class="pl-k">&nbsp;title</span>
          <span class="pl-o">=</span>
          <span class="pl-p">"</span>
          <span class="pl-s">Accordion Item 3</span>
          <span class="pl-p">"</span>
          <span class="pl-p">></span>
          <br>
          <span class="text pl-tab-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quaerat, odit, deleniti omnis animi assumenda esse nulla est neque praesentium ab sunt voluptatum voluptatem itaque cum consequatur dicta illum libero.</span>
          <span class="pl-p pl-tab-1"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-accordion-item</span>
          <span class="pl-p">></span>
          <br>
          <span class="pl-p"><</span>
          <span class="pl-p">/</span>
          <span class="pl-t">vc-accordion</span>
          <span class="pl-p">></span>
        </pre>
      </div>
    </div>
    <div class="doc-item doc-api">
      <h2 id="api">API</h2>
      <p>To get customized accoridion, just set prop <code>property</code>.</p>
      <div class="doc-table">
        <table>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
          <tr>
            <td class="pl-k">styleAccordion</td>
            <td>Can custom style for accordion.</td>
            <td class="pl-t">object</td>
            <td class="pl-s">{}</td>
          </tr>
          <tr>
            <td class="pl-k">animate</td>
            <td>Allow accoridion has animation.</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">true</td>
          </tr>
        </table>
      </div>
      <p>To et customized for accoridion item.</p>
      <div class="doc-table">
        <table>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
          <tr>
            <td class="pl-k">closeable</td>
            <td>Whether a close (x) button is unvisible</td>
            <td class="pl-t">boolean</td>
            <td class="pl-s">false</td>
          </tr>
          <tr>
            <td class="pl-k">title</td>
            <td>Set title for accordion item.</td>
            <td class="pl-t">string | slot</td>
            <td class="pl-s">slot</td>
          </tr>
          <tr>
            <td class="pl-k">styleAccordionItem</td>
            <td>Can custom style for accordion item.</td>
            <td class="pl-t">object</td>
            <td class="pl-s">{}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import IconCode from "./IconCode.vue";

export default {
  components: { IconCode },
  data() {
    return {
      show: false
    };
  }
};
</script>
