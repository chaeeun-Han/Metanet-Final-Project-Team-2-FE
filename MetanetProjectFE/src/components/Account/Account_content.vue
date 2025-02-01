<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-xxl">
      <!-- 여기부터 -->
      <Account_overview
        :userData="{
          password: 'password123',
          car: 'Tesla Model S',
          email: 'kbj@example.com',
          phone: '123-456-7890',
          name: '고범준',
          role: 'Developer',
          profileImage: './../../public/assets/media/avatars/300-1.jpg',
        }"
      />
      <Account_profile_detail
        :userData="{
          user_id: 1,
          id: 'user123',
          password: 'password123',
          car: 'Tesla Model S',
          email: 'user@example.com',
          phone: '123-456-7890',
          name: '고범준',
          role: 'default_user',
        }"
      />
      <Account_chart_widget
        title="Custom Title"
        subtitle="Custom Subtitle"
        :chartData="[20, 18, 15, 12, 10, 8, 5]"
        :categories="['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7']"
      />
      <Account_items />
      <!-- 여기까지 -->
    </div>
  </div>
</template>

<script>
import Account_overview from "./Account_overview.vue";
import Account_profile_detail from "./Account_profile_detail.vue";
import Account_category from "./Account_chart_widget.vue";
import Account_items from "./Account_items.vue";
import Account_chart_widget from "./Account_chart_widget.vue";

export default {
  name: "Account_Content",
  components: {
    Account_overview,
    Account_profile_detail,
    Account_category,
    Account_items,
    Account_chart_widget,
  },
};
</script>
