<template>
  <div id="roasters" class="navbar_padding">
    <!-- Roasting Type Section  -->
    <div class="container">
      <div class="hero-content text-center">
        <h1 class="hero-heading">Roasted Coffee</h1>
        <p
          class="lead text-muted"
        >Each roaster adds their own unique touch to our coffee. We are excited to be able to represent such a talented group.</p>
      </div>
    </div>

    <!-- Selection Tabs -->
    <div class="container">
      <ul class="nav nav-tabs nav-justified flex-column flex-sm-row" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link"
            id="washed-tab"
            data-toggle="tab"
            href="#washed"
            role="tab"
            aria-controls="washed"
            aria-selected="true"
          >Washed</a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            id="pulp-tab"
            data-toggle="tab"
            href="#pulp"
            role="tab"
            aria-controls="pulp"
            aria-selected="false"
          >Honey</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="natural-tab"
            data-toggle="tab"
            href="#natural"
            role="tab"
            aria-controls="natural"
            aria-selected="false"
          >Natural</a>
        </li>
      </ul>

      <!-- Washed Clients -->
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="washed"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Washed coffee is the bread and butter of our region. We have been working on our washed coffee recipe for 5 years. Adding yeasts during fermentation to increase the shelf life and balance the flavors of our coffee. We feel this coffee best represents our farm.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641215/domestique_ptnn9k.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.domestiquecoffee.com/collections/frontpage/products/single-origin-guatemala"
                        class="btn btn-light btn-md roasting"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Domestique Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641217/PHOENIX_BagFront-Smart-Esperanza_bmtn9s.png"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://phoenixcoffee.com/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Phoenix Coffee Co.</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641216/Blueprint-Coffee-Penrose-v17-600x600_vl2e4b.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592652994/brew-ha-ha_nrflue.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.brewhahabr.com/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Brew Ha-Ha!</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image" id="chosenbean">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641215/chosenbean_xfdcl3.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.thechosenbean.com/guatemala-the-chosen-bean-origin/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >The Chosen Bean</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image" id="strong-tree">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641221/Strong-Tree_xnw2ww.png"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://strongtreecoffee.com/all/two-birds"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Strong Tree Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641224/contrabean_lrrgu6.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.contrabean.ca/collections/coffee-offerings/products/guatemala-la-esperanza"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Contrabean Roasting</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image" id="java-planet">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641223/Guatemala_Java_Planet_Coffee_New_Labels_608x608_jspqop.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://jporganiccoffee.com/collections/bird-friendly/products/guatemala-organic"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Java Planet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Honey Clients -->
        <div class="tab-pane fade" id="pulp" role="tabpanel" aria-labelledby="pulp-tab">
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Our honey process has been changing over the years. It started as a pulped natural and has progressed into a more standard honey. Also inoculated with yeast during the fermentation process to help balance the flavors. This coffee is then dried in the solar house. This process produces very little waste and for that reason is one of our favorite to produce.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641214/GoodmanCoffee_hnzj5l.png"
                        type="fetch"
                      >
                        <cld-transformation
                          gravity="auto"
                          height="330"
                          width="330"
                          x="212"
                          y="894"
                          crop="fill"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.goodmancoffeeroasters.com/buy-coffee/standardbeans"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Goodman Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592652994/brew-ha-ha_nrflue.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.brewhahabr.com/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Brew Ha-Ha!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Natural Clients -->
        <div class="tab-pane fade" id="natural" role="tabpanel" aria-labelledby="natural-tab">
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Our highest cupping coffee and easily the most difficult to produce. This requires an immense amount of manual labor. Not only in moving the coffee from the sun to the shade day in and day out but also reviewing the coffee with a black light to remove any beans that have started to go bad.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641213/Blueprint-Coffee-Esperanza-Natural_-1024x1024_lyecjq.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641224/contrabean_lrrgu6.jpg"
                        type="fetch"
                        responsive="width"
                      >
                        <cld-transformation
                          width="330"
                          height="330"
                          gravity="face"
                          crop="fill"
                          fetchFormat="auto"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.contrabean.ca/collections/coffee-offerings/products/guatemala-la-esperanza"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Contrabean Roasting</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <cld-image
                        publicId="https://res.cloudinary.com/twobirds-coffee/image/upload/v1592641214/GoodmanCoffee_hnzj5l.png"
                        type="fetch"
                      >
                        <cld-transformation
                          gravity="auto"
                          height="330"
                          width="330"
                          x="212"
                          y="894"
                          crop="fill"
                        />
                      </cld-image>
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.goodmancoffeeroasters.com/buy-coffee/standardbeans"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                        target="_blank"
                      >Goodman Coffee</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "roasters",
  data() {
    return {};
  }
};
</script>