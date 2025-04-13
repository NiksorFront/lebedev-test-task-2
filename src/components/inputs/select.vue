<script lang="ts"></script>

<template>
  <div class="label-and-input">
    <label class="small-text">роль</label>
    <div class="select-wrapper">
      <select class="small-text styled-select">
        <option>админ</option>
        <option>пользователь</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.select-wrapper {
  position: relative;
}

.styled-select {
  width: 100%;
  padding: 10px 16px;
  border: clamp(1px, 0.3vw, 2px) solid transparent;
  border-radius: var(--border-radius);
  appearance: none;
  cursor: pointer;

  background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
    var(--gradient-img) border-box;

  color: white;
  font-family: Proxima, Helvetica, Arial, sans-serif;
  font-size: clamp(20px, 1.75vw + 1.25vh, 32px);
}

/* Стрелка — псевдоэлемент у обёртки */
.select-wrapper::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 1.25em;
  height: 1.25em;
  pointer-events: none;

  background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
