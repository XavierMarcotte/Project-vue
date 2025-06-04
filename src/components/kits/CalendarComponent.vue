<script setup>
import { Icon } from "@iconify/vue";
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
  CalendarRoot,
} from "reka-ui";

// Un clair problème d'affichage, probablement du au fait de ne pas avoir typescript dans le projet
const isDateUnavailable = (date) => {
  return date.day === 17 || date.day === 18;
};
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid }"
    :is-date-unavailable="isDateUnavailable"
    class="Calendar"
    fixed-weeks
  >
    <CalendarHeader class="CalendarHeader">
      <CalendarPrev class="CalendarNavButton">
        <Icon icon="radix-icons:chevron-left" class="Icon" />
      </CalendarPrev>
      <CalendarHeading class="CalendarHeading" />
      <CalendarNext class="CalendarNavButton">
        <Icon icon="radix-icons:chevron-right" class="Icon" />
      </CalendarNext>
    </CalendarHeader>
    <div class="CalendarWrapper">
      <CalendarGrid v-for="month in grid" :key="month.value.toString()" class="CalendarGrid">
        <CalendarGridHead>
          <CalendarGridRow class="CalendarGridRow">
            <CalendarHeadCell v-for="day in weekDays" :key="day" class="CalendarHeadCell">
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="CalendarGridWrapper">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="CalendarGridRow"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              class="CalendarCell"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                class="CalendarCellTrigger"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>

<style scoped>
.Icon {
  width: 1.5rem;
  height: 1.5rem;
}

.Calendar {
  margin-top: 1.5rem;
  border-width: 1px;
  border-color: #000000;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 22px;
}

.CalendarHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.CalendarNavButton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: #000000;
  background-color: transparent;
  cursor: pointer;
}

.CalendarNavButton:hover {
  color: #ffffff;
  background-color: #000000;
}

.CalendarHeading {
  font-weight: 500;
  color: #000000;
}

.CalendarWrapper {
  display: flex;
  padding-top: 1rem;
  margin-top: 1rem;
  flex-direction: column;
}

@media (min-width: 640px) {
  .CalendarWrapper {
    margin-left: 1rem;
    margin-top: 0;
    flex-direction: row;
  }
}

.CalendarGrid {
  margin-top: 0.25rem;
  width: 100%;
  user-select: none;
  border-collapse: collapse;
}

.CalendarGridRow {
  display: grid;
  margin-bottom: 0.25rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
}

.CalendarGridRow[data-reka-calendar-month-view] {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.CalendarHeadCell {
  border-radius: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #000000;
  font-weight: 400;
}

.CalendarCell {
  position: relative;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.CalendarCellTrigger {
  display: flex;
  position: relative;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: transparent;
  outline-style: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: #000000;
  white-space: nowrap;
  background-color: transparent;
}

.CalendarCellTrigger:hover {
  border-color: #000000;
}

.CalendarCellTrigger:focus {
  box-shadow: 0 0 0 2px #000000;
}

.CalendarCellTrigger[data-disabled] {
  cursor: none;
  color: rgba(0, 0, 0, 0.3);
}

.CalendarCellTrigger[data-selected] {
  background-color: #000000;
  color: #ffffff;
  font-weight: 500;
}

.CalendarCellTrigger[data-selected]::before {
  background-color: #ffffff;
}

.CalendarCellTrigger[data-unavailable] {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}

.CalendarCellTrigger::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 9999px;
  background-color: #ffffff;
}

.CalendarCellTrigger[data-today]::before {
  display: block;
  background-color: var(--grass-9);
}
</style>
