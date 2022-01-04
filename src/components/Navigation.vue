<template>
  <nav>
    <div class="container">
      <div class="nav-columns">
        <div class="nav-column">
          <el-tabs tab-position="left" class="tabs-box">
            <el-tab-pane class="pl-6" label="合作品牌">
              <div class="nav-label">合作品牌</div>
              <div class="h-36 md:h-24 overflow-scroll">
                <div class="inline-block" v-for="brandLogo in brandLogos" :key="brandLogo.id">
                  <div class="w-16 h-16 mx-2 md:mx-6">
                    <img :src="dynamicImport(brandLogo.img)" :alt="brandLogo.id" />
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane class="pl-6" label="联系方式">
              <div class="nav-label">联系方式</div>
              <div class="nav-infos grid grid-cols-1 md:grid-cols-2">
                <ul class="nav-info">
                  <li class="nav-info-label">邮箱</li>
                  <li>
                    <a :href="`mailto:${email}`">{{ email }}</a>
                  </li>
                </ul>
                <ul class="nav-info">
                  <li class="nav-info-label">微信</li>
                  <li>
                    <a :href="`tel:${phone}`">{{ phone }}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { VITE_APP_CONFIG } from '../config';
export default {
  name: 'Navigation',
  setup() {
    const dynamicImport = (name) => {
      return new URL(`../assets/brands/${name}.png`, import.meta.url).href;
    };
    return {
      email: VITE_APP_CONFIG.email,
      phone: VITE_APP_CONFIG.phone,
      brandLogos: VITE_APP_CONFIG.brandLogos,
      dynamicImport
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  position: absolute;
  overflow: hidden;
  background: $yellow;
  .nav-columns {
    transform: translateY(125px);
    display: flex;
    padding: 0 32px;
    @include media('<=654px') {
      flex-direction: column;
      @include media('<=phone') {
        padding: 0 16px;
      }
    }
    .nav-column {
      width: 85%;
      @include media('<=654px') {
        width: 100%;
      }
      &:last-child {
        width: 85%;
        @include media('<=654px') {
          width: 100%;
        }
      }
      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        @include media('<=tablet') {
          font-size: 1rem;
          margin-bottom: 1.4rem;
        }
        @include media('<=phone') {
          font-size: 0.875rem;
          margin-bottom: 1.2rem;
        }
      }
      .nav-infos {
        // display: flex;
        // flex-wrap: wrap;
        @include media('<=654px') {
          justify-content: space-between;
        }
        .nav-info {
          padding: 0;
          width: 50%;
          &:nth-child(3) {
            @include media('<=654px') {
              display: none;
            }
          }
          .nav-info-label {
            // font-weight: 400;
          }
          li {
            font-weight: 300;
            list-style: none;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            @include media('<=tablet') {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
            @include media('<=phone') {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }
            a {
              text-decoration: none;
              color: $black;
            }
          }
        }
      }
      .nav-links {
        padding: 0;
        margin: 0;
        li {
          list-style: none;
          margin-bottom: 2.4rem;
          @include media('<=phone') {
            margin-bottom: 1.6rem;
          }
          a {
            font-weight: 600;
            font-size: 2.8rem;
            text-decoration: none;
            color: $black;
            @include media('<=phone') {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
  .tabs-box {
    height: 100%; 
    --el-color-primary: #A19882; 
    --el-border-color-light: #E6DDC6;
  }
}
</style>
