<template>
  <div class="navigate_container">
    <div class="nav_search_container">
      <div class="search_title">
        <a @click="search">搜索</a>
        <input class="search" type="text" v-model="searchText" @keydown.enter="search" placeholder="百度"/>
        <!--删除按钮-->
        <button class="clear-btn" @click="clearSearchText">x</button>
      </div>
    </div>

    <div class="nav_container">
      <div class="nav_item" v-for="nav in navList" :key="nav.title">
        <div class="nav_item_title">
          <b>{{ nav.title }}</b>
        </div>

        <div class="nav_item_main">
          <a
              class="nav_item_url"
              v-for="navItem in nav.arr"
              :key="navItem.id"
              :href="navItem.nav_url"
              target="_blank"
          >
            <div class="nav_item_text">
              <img :src='navItem.nav_img' alt="picture" onerror="this.src='/vuepress-blog/assets/img/logo.png'">
<!--              <img :src='navItem.nav_img' alt="picture" :onerror="errorImg">-->
              <br/>
              {{ navItem.nav }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import {navLists} from "/api/navList";

// console.log(navLists)
const navList = ref([
  {
    // https://www.baidu.com/favicon.ico
    title: "浏览器 | 搜索",
    arr: [
      {
        nav: "百度",
        nav_url: "https://www.baidu.com",
        nav_img: "https://www.baidu.com/favicon.ico",
        id: "0000001",
      },
      {
        nav: "必应",
        nav_url: "https://cn.bing.com",
        nav_img: "https://cn.bing.com/favicon.ico",
        id: "0000002",
      },
      {
        nav: "QQ浏览器",
        nav_url: "https://browser.qq.com",
        nav_img: "https://browser.qq.com/favicon.ico",
        id: "0000003",
      },

    ],
  }])
console.log(navList)
const searchText = ref('')
const currentSearchEngine = ref("https://www.baidu.com/s?wd=")
const search = () => {
  let url
  let content = searchText.value
  if (content.match("^https://") || content.match("^http://") || content.match("^www.")) {
    url = content
  } else {
    url = currentSearchEngine.value + content
  }
  searchText.value = ''
  window.open(url);
}
const clearSearchText = () => {
  searchText.value = ''
}
// export default {
//   name: "Navigate",
//   data() {
//     return {
//       navList: navList,
//       searchText: '',
//       currentSearchEngine: "https://www.baidu.com/s?wd=",
//     };
//   },
//   methods:{
//     search() {
//       let url
//       let content = this.searchText;
//       if (content.match("^https://") || content.match("^http://") || content.match("^www.")) {
//         url = content
//       } else {
//         url = this.currentSearchEngine + content;
//       }
//       this.searchText = '';
//       window.open(url);
//     },
//     clearSearchText() {
//       this.searchText = ''
//     }
//   }
// };
</script>

<style lang="stylus" scoped>
body {
  //background-color #2c815b;
    .navigate_container {
      a {
        text-decoration: none;
      }
      /*
      搜索框
      */
      .nav_search_container {
        height: 60px;
        width: 50%;
        min-width: 330px;
        margin: 20px auto;
        background-color: rgba(193, 167, 167, 0.589);
        border-radius: 20px;

        .search_title {
          height: 100%;
          display:flex;
          align-items: center;
          min-width: 330px;
          justify-content: space-around;
          //background-color #2c815b;
          a {
            display: flex;
            cursor: pointer;
            min-width: 40px;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            //height: 34px;
            margin: 0 15px;
            &:hover {
              color: #2c815b;
            }
          }
          .clear-btn {
            cursor: pointer;
            background-color: rgba(193, 167, 167, 0.589);
            margin-right: 10px;
            border-radius: 20px;
            height: 20px;
            width: 20px;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            border: 1px solid #d9d9d9;
            &:hover {
              scale: 1.2;
            }
          }
          .search {
            width: 85%;
            min-width: 170px;
            padding: 10px;
            border: none;
            font-size: 18px;
            border-radius: 10px;
            text-decoration: none;
            background-color: rgba(233, 221, 221, 0);
          }
          .search:focus {
            outline: none;
          }
        }
      }

      /*
      导航区
      */

      .nav_container {
        display: flex;
        flex-wrap: wrap;
        //align-content: start;
        justify-content: center;
        align-content: flex-start;
        width: auto;
        .nav_item {
          text-align: center;
          margin: 20px 40px;
          border-radius: 5px;

          .nav_item_title {
            margin: 10px;
          }

          .nav_item_main {
            padding: 20px;
            width: 300px;
            border-radius: 20px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5px;
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);

            .nav_item_url {
              text-decoration: none;
            }

            .nav_item_url:hover {
              -webkit-animation: nav_item_url 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
              animation: nav_item_url 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            }

            @keyframes nav_item_url {
              0% {
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
              }

              100% {
                -webkit-transform: scale3d(1.1, 1.1, 1.1);
                transform: scale3d(1.1, 1.1, 1.1);
              }
            }

            /*
                CSS gap 属性是用来设置网格行与列之间的间隙（gutters），该属性是 row-gap 和 column-gap 的简写形式。
            */

            .nav_item_text  img{
              //width: 96.662px;
              width: 66.662px;
              line-height: 90px;
              border-radius: 20px;
              // border: 1px solid #E7E7E7;
              box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          .nav_item_main:hover {
            box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
          }
        }
      }
    }

}
</style>
