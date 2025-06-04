<script setup>
import { Icon } from "@iconify/vue";
import { CheckboxIndicator, CheckboxRoot } from "reka-ui";
import { ref } from "vue";
import "@radix-ui/colors/black-alpha.css";
import "@radix-ui/colors/grass.css";

const checkboxOne = ref(true);
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center' }">
    <label>
      <CheckboxRoot v-model="checkboxOne" class="CheckboxRoot">
        <CheckboxIndicator class="CheckboxIndicator">
          <Icon icon="radix-icons:check" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="Label">Accept terms and conditions.</span>
    </label>
  </div>
</template>

<style scoped>
button {
  all: unset;
}
label {
  display: flex;
  align-items: center;
  justify-content: center;
}
.CheckboxRoot {
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px var(--black-a7);
}
.CheckboxRoot:hover {
  background-color: var(--grass-3);
}
.CheckboxRoot:focus {
  box-shadow: 0 0 0 2px black;
}

.CheckboxIndicator {
  color: var(--grass-11);
}

.Label {
  color: black;
  padding-left: 15px;
  font-size: 15px;
  line-height: 1;
}
</style>
