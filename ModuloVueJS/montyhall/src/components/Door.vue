<template>
  <div class="door-area">
    <div class="door-frame" :class="{selected: selected && !open}">
      <Gift v-if="open && hasGift" />
    </div>
    <div class="door" :class="{open}" @click="selected = !selected">
      <div class="number">{{number}}</div>
      <div class="knob" @click.stop="open = true"></div>
    </div>
  </div>
</template>

<script>
import Gift from "./Gift";
export default {
  name: "Door",
  components: { Gift },
  props: {
    number: {},
    hasGift: { type: Boolean }
  },
  data: function() {
    return {
      open: false,
      selected: false
    };
  }
};
</script>

<style>
:root {
  --dor-border: 5px solid rgb(168, 167, 167);
  --selecte-border: 5px solid rgb(253, 253, 1);
}
.door-area {
  position: relative;
  width: 200px;
  height: 310px;
  border-bottom: 10px solid #aaa;
  margin-bottom: 20px;
  font-size: 3rem;

  display: flex;
  justify-content: center;
}
.door-frame {
  position: absolute;
  height: 300px;
  width: 180px;
  border-left: var(--dor-border);
  border-top: var(--dor-border);
  border-right: var(--dor-border);

  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.door {
  position: absolute;
  top: 5px;
  height: 295px;
  width: 170px;
  background-color: rgb(88, 38, 4);

  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
}
.door .knob {
  height: 20px;
  width: 20px;
  border-radius: 10px;

  background-color: rgb(212, 212, 212);
  align-self: flex-start;
  margin-top: 60px;
}
.door-frame.selected {
  border-left: var(--selecte-border);
  border-top: var(--selecte-border);
  border-right: var(--selecte-border);
}
.door.open {
  display: none;
}
.door.open .number {
  display: none;
}
</style>