<template>
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <div class="card-header cursor-pointer">
      <div class="card-title m-0"><h3 class="fw-bold m-0">Profile Details</h3></div>
      <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">Edit Profile</a>
    </div>
    <div class="card-body p-9">
      <!-- Full Name -->
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Full Name</label>
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-800">{{ userData.name }}</span>
        </div>
      </div>

      <!-- ID -->
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">User ID</label>
        <div class="col-lg-8">
          <span class="fw-semibold text-gray-800 fs-6">{{ userData.id }}</span>
        </div>
      </div>

      <!-- Contact Phone -->
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Contact Phone</label>
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bold fs-6 text-gray-800 me-2">{{ userData.phone }}</span>
          <span class="badge badge-success">Verified</span>
        </div>
      </div>

      <!-- Email -->
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Email</label>
        <div class="col-lg-8">
          <span class="fw-semibold fs-6 text-gray-800">{{ userData.email }}</span>
        </div>
      </div>

      <!-- Car -->
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Car Model</label>
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-800">{{ userData.car }}</span>
        </div>
      </div>

      <!-- Role -->
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Role</label>
        <div class="col-lg-8">
          <span class="fw-bold fs-6 text-gray-800">{{ userData.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account_profile_detail",
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({
        user_id: 1,
        id: "user123",
        password: "password123",
        car: "Tesla Model S",
        email: "user@example.com",
        phone: "123-456-7890",
        name: "고범준",
        role: "default_user",
      }),
    },
  },
};
</script>
