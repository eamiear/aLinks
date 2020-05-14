<template>
    <div>
        <LinkItem :name="linkList.name" :items="linkList.item"></LinkItem>
    </div>
    
</template>

<script>
import LinkItem from './LinkItem'
export default {
  name: 'LinkList',
  props: {
      linkList: {
          type: Object,
          default: () => {}
      }
  },
  components: {
    LinkItem
  }
}
</script>