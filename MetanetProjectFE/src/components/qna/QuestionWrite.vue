<template>
<div class="container">
  <div class="question">
    <div class="lecture">
      <h2 class="top-text">강의명 : </h2>
    </div>
    <div class="line"></div>
    <div class="top-text">작성자 : </div>
    <div class="line"></div>
    <input type="text" class="title-input" placeholder="제목을 입력하세요" required>
    <div class="line"></div>
    <textarea class="content-input" placeholder="내용을 입력하세요"></textarea>
    <div class="btn-container">
      <div class="btn-group">
        <span class="btn btn-primary fs-bold px-6" data-kt-inbox-form="send">
          <span class="indicator-label">확인</span>
        </span>
      </div>
      <span class="btn btn-icon btn-sm btn-clean btn-active-light-primary dz-clickable" id="kt_inbox_reply_attachments_select" @click="openFilePicker">
        <i class="ki-duotone ki-paper-clip fs-2 m-0"></i>
      </span>
      <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*" multiple style="display: none">

      <div class="image-preview-wrapper">
        <div class="image-preview-container">
          <div v-for="(image, index) in previewImages" :key="index">
            <img :src="image" class="image-preview" alt="첨부된 이미지">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      selectedFiles: null,
      previewImages: null
    };
  },
  methods: {
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.selectedFiles = Array.from(files);

        this.previewImages = [];
        this.selectedFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.previewImages.push(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      }
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  text-align: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
}
.question {
  text-align: initial;
  margin: 30px auto;
  width: 100%;
  max-width: 1000px;
  padding: 40px 15px;
  border: 2px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 2%;
}
.top-text {
  text-align: initial;
  font-size: 18px;
  font-weight: 600;
}
.line {
    width: 100%;
    height: 0.5px;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 20px 0;
}
.title-input {
  text-align: initial;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: none;
  outline: none;
}
.content-input {
  width: 100%;
  height: 400px;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 8px;
  resize: none;
}
.submit-btn {
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #0a72eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 5px;
}
.btn-container {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.image-preview-wrapper {
  flex-grow: 1;
  overflow-x: hidden;
}
.image-preview-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  max-width: 100%;
  gap: 10px;
  padding: 10px;
  background: #f8f9fa;
  white-space: nowrap;
}
.image-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.btn-primary {
  width: 80px;
  white-space: nowrap;
  text-align: center;
}
</style>