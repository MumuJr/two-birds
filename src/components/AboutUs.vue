<template>
  <div id="aboutus" class="navbar_padding">
    <div class="container">
      <div class="wrapper my-5">
        <h1 class="hero-heading text-center">Two Birds Coffee</h1>
        <div class="story my-2">
          <p
            class="text-justify processes_dash"
          >Two Birds Coffee began, strangely, from the sadness of seeing our family owned coffees being dumped into commodity bags and sold on the C-Market. Earning less than it cost to produce the product, we were struggling to make ends meet on Finca Esperanza in Guatemala. With plagues like Roya, producing enough coffee on an organic farm to sustain harvest was simply not possible. If harvest alone wasn’t enough of a problem, payment standards and minimizing ecological footprint on the farm were also driving the cost of production to new heights. We simply needed to make more than the C-Market was offering. Avoiding the C-Market altogether became our first goal.</p>
        </div>
      </div>

     <photo-container></photo-container>

      <div class="wrapper">
        <div class="story my-4">
          <p
            class="text-justify processes_dash"
          >Ana, the farm owner (and our mother), agreed to send us a “trial run” of twenty-five bags to sell out of a garage. After reaching out to some specialty roasters (a lot of specialty roasters), we quickly realized that, while an organic product, the quality of our coffee was not meeting the demands of the industry. Not only that, but we realized our soil health may not be quite as great as we initially believed. Thus began the long journey of quality improvement and control. As our quality improved year by year, we steadily began to sell to an incredible group of roasters.</p>
        </div>
      </div>
    </div>
    <div class="photos my-3 container">
      <div>
        <img class="firstPic" src="../assets/goodmans.jpg" />
      </div>
    </div>
    <div class="container">
      <div class="wrapper">
        <div class="story my-4">
          <p
            class="text-justify processes_dash"
          >Two Birds Coffee now imports from a variety of farms in Guatemala, and we take the same approach with these coffees as we did in the beginning with Esperanza. Our goal is not only to deliver great coffees to roasters, but also to ensure that the ecological and socioeconomic impacts of our trade are only positive in nature, improving the communities of the coffee producers. We are a family owned and operated business, with a commitment to improve year after year. Our goal is to leave the land and our little world better off than when we arrived. Join us in our adventure.</p>
        </div>
      </div>
      <div class="photos my-3">
        <div>
          <img class="firstPic" src="../assets/IMG_0827.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoContainer from './PhotoContainer.vue'

export default {
  name: "aboutus",
  components: {
    PhotoContainer
  }, 
  data() {
    return {};
  }
};
</script>