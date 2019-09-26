<template>
  <div class="now-release">
    <ul class="release-list">
      <li class="release-item">
        <img src="./../assets/images/1.jpg">
        <div class="release-item-right">
          <div>
            <p class="release-item-title">小Q</p>
            <P class="release-item-score">观众评<span>9.2</span></P>
            <p class="release-item-actor">主演:任达华 梁咏琪 罗仲谦</p>
            <p class="release-item-cinema">今天323家影院放映222场</p>
          </div>
          <button>购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NowRelease', 
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import './../assets/css/base.scss';
  .now-release{
    width: 100%;
    height: rem(40px);
    .release-list{
      .release-item{
        height: rem(100px);
        margin-left: rem(15px);
        display: flex;
        padding-top: rem(12px);
        img{
          width: rem(64px);
          height: rem(90px);
        }
        .release-item-right{
          margin-left: rem(10px);
          border-bottom: rem(1px) solid #dddddd;
          display: flex;
          button{
            width: rem(47px);
            height: rem(27px);
            background: #f03d37;
            border: 0;
            border-radius: rem(5px);
            margin-top: rem(40px);
            margin-left: rem(95px);
            color: #ffffff;
          }
          .release-item-title{
            color: #333333;
            font-size: rem(17px);
            font-weight: 700;
            margin-bottom: rem(5px);
          }
          .release-item-score{
            color: #666666;
            span{
              color: #faaf00;
              font-size: rem(15px);
              font-weight: 700;
              margin-left: rem(5px);
            }
          }
          .release-item-actor,.release-item-cinema{
            color: #666666;
            font-size: rem(13px);
            margin-top: rem(4px);
          }
        }
      }
    }
  }
</style>