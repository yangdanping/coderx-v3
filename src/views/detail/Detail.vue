<template>
  <div class="detail">
    <NavBar>
      <template #center> <DetailTools :article="article" :isAuthor="isAuthor(userInfo.id)" /></template>
    </NavBar>
    <DetailContent :article="article" />
    <Comment :commentInfo="commentInfo" />
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/navbar/NavBar.vue';
import DetailTools from './cpns/detail/DetailTools.vue';
import DetailContent from './cpns/detail/DetailContent.vue';
import Comment from './cpns/comment/Comment.vue';

import useUserStore from '@/stores/user';
import useArticleStore from '@/stores/article';
import useCommentStore from '@/stores/comment';

const route = useRoute();
const articleStore = useArticleStore();
const commentStore = useCommentStore();
const { article, isAuthor } = storeToRefs(articleStore);
const { commentInfo } = storeToRefs(commentStore);
const { userInfo } = storeToRefs(useUserStore());

onMounted(() => {
  console.log('onMounted articleStore.getDetailAction', route.params.articleId);
  articleStore.getDetailAction(route.params.articleId);
});
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
