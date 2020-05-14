<template>
    <div class="item">
        <!-- <div class="nav clearfix">
            <h3 class="fl">
                {{name}}
            </h3>
        </div> -->
        <div class="details clearfix">
            <a :href="item.link" target="_blank" rel="nofollow noopener" class="site fl" v-for="(item, index) in items" :key="index">
                <div class="el-image">
                    <img :src="item.icon" class="el-image__inner">
                </div>
                <span class="name text-ellip">{{item.text}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LinkItem',
  props: {
    name: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>