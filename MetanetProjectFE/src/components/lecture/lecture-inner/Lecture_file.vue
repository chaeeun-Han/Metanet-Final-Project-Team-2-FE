<template>
  <div class="lecture-file">
    <h3 class="section-title">강의 자료</h3>

    <!-- 본인의 수업(강의의 강사와 로그인 사용자가 일치하거나 관리자인 경우)일 때 파일 추가 버튼 노출 -->
    <div v-if="isTeacher" class="upload-button-container">
      <button class="btn btn-success" @click="openUploadModal">파일 추가</button>
    </div>

    <div v-if="filesLoaded && files.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th style="width: 10%">#</th>
            <th style="width: 70%">파일 제목</th>
            <th style="width: 20%" class="text-center">다운로드</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fileUrl, index) in files" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <span class="file-name">
                <i class="fas fa-file-alt"></i>
                {{ formatFileName(fileUrl) || lectureData.title }}
              </span>
            </td>
            <td class="text-center">
              <button @click="downloadFile(fileUrl)" class="btn btn-outline-primary btn-sm btn-download">다운로드</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="filesLoaded && !files.length" class="text-center">파일이 없습니다.</div>
    <div v-else class="text-center">파일 데이터 로딩 중...</div>

    <!-- 다운로드 확인 모달 -->
    <div v-if="showModal" class="custom-modal-overlay">
      <div class="custom-modal">
        <div class="modal-header">
          <h2 class="modal-title">다운로드 확인</h2>
          <button class="close-button" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <p>다운로드하면 강의 환불이 불가능합니다. 계속하시겠습니까?</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" @click="closeModal">취소</button>
          <button class="btn btn-primary" @click="confirmDownload">예</button>
        </div>
      </div>
    </div>

    <div v-if="showUploadModal" class="custom-modal-overlay">
      <div class="custom-modal">
        <div class="modal-header">
          <h2 class="modal-title">파일 업로드</h2>
          <button class="close-button" @click="closeUploadModal">&times;</button>
        </div>
        <div class="modal-body">
          <input type="file" @change="handleFileChange" />
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" @click="closeUploadModal">취소</button>
          <button class="btn btn-primary" @click="uploadFile" :disabled="!selectedFile">업로드</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../../apis/api";
export default {
  props: {
    lectureData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      files: [],
      filesLoaded: false,
      showModal: false,
      fileUrlToDownload: "",
      showUploadModal: false,
      selectedFile: null,
    };
  },
  computed: {
    isTeacher() {
      const userData = JSON.parse(sessionStorage.getItem("userData")) || {};
      return this.lectureData && (userData.name === this.lectureData.teacher || userData.role === "관리자");
    },
  },
  methods: {
    async fetchFiles() {
      const lectureId = this.$route.params.lectureId;
      try {
        const response = await api.get(`/lectures/data/${lectureId}`);
        this.files = response.data.data || [];
        this.filesLoaded = true;
      } catch (error) {
        console.error("강의 자료 데이터 가져오기 실패:", error);
        this.filesLoaded = true;
      }
    },
    formatFileName(url) {
      if (!url) return "";
      const parts = url.split("/");
      return parts[parts.length - 1];
    },
    downloadFile(fileUrl) {
      this.fileUrlToDownload = fileUrl;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.fileUrlToDownload = "";
    },
    async confirmDownload() {
      try {
        const lectureId = this.$route.params.lectureId;
        await api.put(`/lectures/${lectureId}/refund-status`);
        const link = document.createElement("a");
        link.href = this.fileUrlToDownload;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.closeModal();
      } catch (error) {
        console.error("환불 상태 업데이트 실패:", error);
        alert("환불 상태 업데이트에 실패했습니다.");
        this.closeModal();
      }
    },
    openUploadModal() {
      this.showUploadModal = true;
    },
    closeUploadModal() {
      this.showUploadModal = false;
      this.selectedFile = null;
    },
    handleFileChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.selectedFile = files[0];
      }
    },
    async uploadFile() {
      if (!this.selectedFile) return;
      const lectureId = this.$route.params.lectureId;
      const formData = new FormData();
      formData.append("files", this.selectedFile);
      try {
        await api.post(`/lectures/upload/${lectureId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("파일 업로드 성공!");
        this.closeUploadModal();
        // 파일 업로드 후 파일 목록 새로고침
        this.fetchFiles();
      } catch (error) {
        console.error("파일 업로드 실패:", error);
        alert("파일 업로드에 실패했습니다.");
      }
    },
  },
  created() {
    this.fetchFiles();
  },
};
</script>

<style scoped>
.lecture-file {
  padding: 20px;
}

.section-title {
  font-size: 1.75rem;
  margin-bottom: 20px;
}

.table {
  width: 100%;
}

.file-name {
  font-size: 1rem;
  color: #3b82f6;
  vertical-align: middle;
}

.file-name i {
  margin-right: 5px;
}

/* 다운로드 버튼 테두리 추가 */
.btn-download {
  border: 2px solid #3b82f6;
  border-radius: 4px;
}

/* 파일 업로드 버튼 스타일 */
.upload-button-container {
  margin-bottom: 15px;
}

.upload-button-container .btn {
  background-color: #28a745;
  border-color: #28a745;
  color: #fff;
}

/* 모달 스타일 */
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.custom-modal {
  background: #fff;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.modal-title {
  margin: 0;
  font-size: 1.5rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
  font-size: 1.1rem;
}

.modal-footer {
  padding: 15px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
