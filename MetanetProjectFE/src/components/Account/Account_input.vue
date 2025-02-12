<template>
  <form @submit.prevent="handleSubmit" style="padding: 30px">
    <!-- 일반 필드 렌더링 (파일, 텍스트, 날짜 등) -->
    <div style="display: flex; align-items: center; gap: 10px">
      <button style="margin-bottom: 10px" class="btn btn-primary btn-sm" onclick="window.open('http://localhost:8080/zoom/auth', '_blank')">
        Zoom
      </button>
      <span>로그인을 완료하고 주소 code 의 값을 넣어주세요!!</span>
    </div>
    <input type="text" name="code" v-model="modelValue.code" class="form-control bg-transparent" placeholder="Enter code" />

    <div v-for="(field, index) in nonListFields" :key="'nonlist-' + index" class="fv-row mb-3" style="margin-top: 20px">
      <!-- 파일 입력 -->
      <div v-if="field.type === 'file'">
        <label>{{ field.placeholder }}</label>
        <input
          type="file"
          :name="field.name"
          :required="field.required"
          class="form-control bg-transparent"
          @change="handleFileChange(field.name, $event)"
        />
      </div>
      <!-- 태그 선택 -->
      <div v-else-if="field.type === 'tags'">
        <label style="padding-right: 30px">{{ field.placeholder }}</label>
        <div v-for="tag in tagOptions" :key="tag.tag_id" class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" :id="'tag-' + tag.tag_id" :value="tag.tag_id" v-model="selectedTags" @change="updateTags" />
          <label :for="'tag-' + tag.tag_id" class="form-check-label">
            {{ tag.tag_name }}
          </label>
        </div>
        <p v-if="selectedTags.length === 0" class="text-muted mt-2">태그를 선택해주세요</p>
        <p v-else class="text-muted mt-2">현재 선택된 태그: {{ selectedTags.join(", ") }}</p>
      </div>
      <!-- 그 외의 일반 입력 필드 (텍스트, date 등) -->
      <div v-else>
        <label>{{ field.placeholder }}</label>
        <input
          :type="field.type"
          :placeholder="field.placeholder"
          :name="field.name"
          :required="field.required"
          autocomplete="off"
          class="form-control bg-transparent"
          :value="modelValue[field.name] || ''"
          @input="updateField(field.name, $event.target.value)"
        />
      </div>
    </div>

    <!-- 리스트 타입 필드 렌더링 (예: 강의 상세 일정) -->
    <div v-for="(field, index) in listFields" :key="'list-' + index" class="fv-row mb-3">
      <label>{{ field.placeholder }}</label>
      <div class="list-group-container">
        <div v-for="(group, groupIndex) in getListValue(field.name)" :key="groupIndex" class="group">
          <!-- 안내 문구 -->
          <div class="list-group-row row">
            <label class="mb-2" style="font-size: 0.9rem; color: #888"> 시간은 15분 단위로 입력 가능합니다. </label>
            <div class="col">
              <!-- 강의 날짜 -->
              <input
                type="date"
                v-model="group.date"
                @input="updateListField(field.name, groupIndex, 'date', $event.target.value)"
                placeholder="강의 날짜"
                class="form-control"
                max="9999-12-31"
              />
            </div>
            <div class="col">
              <!-- 강의 시작 시간 (15분 단위 보정) -->
              <input
                type="time"
                :value="group.startTime"
                @blur="updateListField(field.name, groupIndex, 'startTime', $event.target.value)"
                placeholder="강의 시작"
                class="form-control"
                min="00:00"
                max="23:45"
                step="900"
                pattern="^(?:[01]\d|2[0-3]):(?:00|15|30|45)$"
              />
            </div>
            <div class="col">
              <!-- 강의 종료 시간 (15분 단위 보정) -->
              <input
                type="time"
                :value="group.endTime"
                @blur="updateListField(field.name, groupIndex, 'endTime', $event.target.value)"
                placeholder="강의 종료"
                class="form-control"
                min="00:00"
                max="23:45"
                step="900"
                pattern="^(?:[01]\d|2[0-3]):(?:00|15|30|45)$"
              />
            </div>
          </div>
          <!-- 강의 제목 입력 -->
          <div class="list-group-row mt-2">
            <input
              type="text"
              v-model="group.title"
              @input="updateListField(field.name, groupIndex, 'title', $event.target.value)"
              placeholder="강의 제목"
              class="form-control"
            />
          </div>
          <!-- 강의 설명 입력 -->
          <div class="list-group-row mt-2">
            <input
              type="text"
              v-model="group.description"
              @input="updateListField(field.name, groupIndex, 'description', $event.target.value)"
              placeholder="강의 설명"
              class="form-control"
            />
          </div>
          <!-- 삭제 버튼 (그룹이 1개 이상일 때 표시) -->
          <div class="list-group-controls mt-2">
            <button
              type="button"
              @click="removeListGroup(field.name, groupIndex)"
              v-if="getListValue(field.name).length > 1"
              class="btn btn-danger btn-sm"
            >
              -
            </button>
          </div>
          <hr />
        </div>
        <!-- plus 버튼: 리스트의 마지막 아래에 위치 -->
        <div class="add-group-btn">
          <button type="button" @click="addListGroup(field.name)" class="btn btn-primary btn-sm">+</button>
        </div>
      </div>
    </div>

    <!-- 제출 버튼 -->
    <div class="d-grid mb-10">
      <input type="submit" id="kt_sign_in_submit" class="btn btn-primary" :value="text" />
    </div>
  </form>
</template>

<script>
import api from "../../apis/api";
export default {
  name: "Account_input",
  props: {
    action: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
      default: "Submit",
    },
    fields: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      tagOptions: [],
      selectedTags: [],
    };
  },
  computed: {
    nonListFields() {
      return this.fields.filter((field) => field && field.type !== "lists");
    },
    listFields() {
      return this.fields.filter((field) => field && field.type === "lists");
    },
  },
  mounted() {
    const hasTagsField = this.fields.some((field) => field.type === "tags");
    if (hasTagsField) {
      this.getTags();
    }
  },
  methods: {
    async handleSubmit() {
      // 기존 modelValue 복사 및 날짜 필드 처리
      const modelValue = { ...this.modelValue };

      if (modelValue.startDate && !modelValue.startDate.includes("T")) {
        modelValue.startDate += "T00:00:00";
      }
      if (modelValue.endDate && !modelValue.endDate.includes("T")) {
        modelValue.endDate += "T00:00:00";
      }
      if (modelValue.deadlineTime && !modelValue.deadlineTime.includes("T")) {
        modelValue.deadlineTime += "T00:00:00";
      }

      // FormData 객체 생성
      const formData = new FormData();
      formData.append("code", modelValue.code);
      formData.append("title", modelValue.title);
      formData.append("category", modelValue.category);
      formData.append("description", modelValue.description);
      formData.append("startDate", modelValue.startDate);
      formData.append("endDate", modelValue.endDate);
      formData.append("deadlineTime", modelValue.deadlineTime);
      formData.append("price", modelValue.price);
      formData.append("limitStudent", modelValue.limitStudent);
      formData.append("tags", modelValue.tags);

      if (modelValue.profileFile) {
        formData.append("profileFile", modelValue.profileFile);
      }
      if (modelValue.descriptionPicFile) {
        formData.append("descriptionPicFile", modelValue.descriptionPicFile);
      }

      // 리스트 배열을 JSON 문자열로 변환한 후, Blob으로 감싸서 전송 (Content-Type: application/json)
      if (Array.isArray(modelValue.lists)) {
        const listsJson = JSON.stringify(modelValue.lists);
        const listsBlob = new Blob([listsJson], { type: "application/json" });
        formData.append("lists", listsBlob);
      }

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await axios.post("http://localhost:8080/lectures/add", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        window.location.reload();
      } catch (error) {
        console.log("강의 추가 실패: ", error.response ? error.response.data : error.message);
        alert("강의 추가 실패.");
      }
    },
    updateField(fieldName, value) {
      if (fieldName === "tags") {
        const updated = { ...this.modelValue, tags: this.selectedTags.join(",") };
        this.$emit("update:modelValue", updated);
        return;
      }
      const updated = { ...this.modelValue, [fieldName]: value };
      this.$emit("update:modelValue", updated);
    },
    handleFileChange(fieldName, event) {
      const file = event.target.files[0];
      this.updateField(fieldName, file);
    },
    getListValue(fieldName) {
      let list = this.modelValue[fieldName];
      if (!Array.isArray(list)) {
        list = [this.createEmptyListGroup()];
        this.updateField(fieldName, list);
      }
      return list;
    },
    createEmptyListGroup() {
      return {
        date: "",
        startTime: "",
        endTime: "",
        title: "",
        description: "",
      };
    },
    addListGroup(fieldName) {
      const list = this.getListValue(fieldName);
      list.push(this.createEmptyListGroup());
      this.updateField(fieldName, list);
    },
    removeListGroup(fieldName, index) {
      const list = this.getListValue(fieldName);
      if (list.length > 1) {
        list.splice(index, 1);
        this.updateField(fieldName, list);
      }
    },
    updateListField(fieldName, groupIndex, key, value) {
      if (key === "startTime" || key === "endTime") {
        value = this.adjustTime(value);
      }
      const list = this.getListValue(fieldName);
      if (list[groupIndex]) {
        list[groupIndex][key] = value;
        this.updateField(fieldName, list);
      }
    },
    adjustTime(timeStr) {
      const match = timeStr.match(/^(\d{2}):(\d{2})$/);
      if (!match) return timeStr;
      let hour = parseInt(match[1], 10);
      let minute = parseInt(match[2], 10);
      minute = Math.floor(minute / 15) * 15;
      return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    },
    getTags() {
      api
        .get("/lectures/get-tags")
        .then((response) => {
          this.tagOptions = response.data.data;
        })
        .catch((error) => {
          console.error("태그 데이터 가져오기 실패:", error);
        });
    },
    updateTags() {
      const updated = { ...this.modelValue, tags: this.selectedTags.join(",") };
      this.$emit("update:modelValue", updated);
    },
  },
};
</script>

<style scoped>
.fv-row {
  margin-bottom: 1rem;
}
.form-control {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
.btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.btn-sm {
  padding: 0.25rem 0.5rem;
}
.row {
  display: flex;
  gap: 0.5rem;
}
.col {
  flex: 1;
}
.me-2 {
  margin-right: 0.5rem;
}
.list-group-container {
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  padding: 1rem;
}
.list-group-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.list-group-controls {
  display: flex;
  justify-content: flex-end;
}
.add-group-btn {
  text-align: right;
}
.form-check {
  margin-right: 15px;
}
</style>
