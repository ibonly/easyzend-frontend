export default {
    template: `
      <header>
        <span class="time">8:36</span>
        <span class="icons">
          <a href="#scan" @click="$emit('open-scan-page')"><i class="fa-solid fa-address-card white-icon"></i></a>
          &nbsp;&nbsp;&nbsp;
          <a href="#notifications" @click="$emit('open-notification-page')"><i class="fa-solid fa-bell white-icon"></i></a>
        </span>
      </header>
    `
  };