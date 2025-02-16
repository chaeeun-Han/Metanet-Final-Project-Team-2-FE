<template>
  <form @submit.prevent="handleSubmit" style="padding: 30px">
    <div style="display: flex; align-items: center; gap: 10px">
      <button
        style="margin-bottom: 10px"
        class="btn btn-primary btn-sm"
        onclick="window.open('https://bamjun.click:9000/zoom/auth', '_blank')"
      >
        Zoom
      </button>
      <span>로그인을 완료하고 주소 code 의 값을 넣어주세요!!</span>
    </div>
    <input
      type="text"
      name="code"
      v-model="modelValue.code"
      class="form-control bg-transparent"
      placeholder="로그인을 완료하고 주소 code 의 값을 넣어주세요!"
    />

    <div v-for="(field, index) in nonListFields" :key="'nonlist-' + index" class="fv-row mb-3" style="margin-top: 20px">
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
      <div v-else-if="field.type === 'tags'">
        <label style="padding-right: 30px">{{ field.placeholder }}</label>
        <div v-for="tag in tagOptions" :key="tag.tag_id" class="form-check form-check-inline">
          <input
            type="checkbox"
            class="form-check-input"
            :id="'tag-' + tag.tag_id"
            :value="tag.tag_id"
            v-model="selectedTags"
            @change="updateTags"
          />
          <label :for="'tag-' + tag.tag_id" class="form-check-label">
            {{ tag.tag_name }}
          </label>
        </div>
        <p v-if="selectedTags.length === 0" class="text-muted mt-2">태그를 선택해주세요</p>
        <p v-else class="text-muted mt-2">현재 선택된 태그: {{ selectedTags.join(", ") }}</p>
      </div>
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

    <div class="fv-row mb-3">
      <button type="button" class="btn btn-secondary btn-sm" @click="toggleExcelMode">
        {{ useExcel ? "목록 입력으로 전환" : "Excel 로 넣기" }}
      </button>
    </div>

    <div v-if="useExcel" class="fv-row mb-3">
      <label>Excel 파일 업로드 (강의 상세 일정)</label>
      <input type="file" name="excelFile" @change="handleExcelFileChange" class="form-control" required />
      <button type="button" class="btn btn-info btn-sm mt-2" @click="downloadExcelTemplate">엑셀 템플릿 받기</button>
    </div>

    <div v-else>
      <div v-for="(field, index) in listFields" :key="'list-' + index" class="fv-row mb-3">
        <label>{{ field.placeholder }}</label>
        <div class="list-group-container">
          <div v-for="(group, groupIndex) in getListValue(field.name)" :key="groupIndex" class="group">
            <div class="list-group-row row">
              <label class="mb-2" style="font-size: 0.9rem; color: #888"> 시간은 15분 단위로 입력 가능합니다. </label>
              <div class="col">
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
            <div class="list-group-row mt-2">
              <input
                type="text"
                v-model="group.title"
                @input="updateListField(field.name, groupIndex, 'title', $event.target.value)"
                placeholder="강의 제목"
                class="form-control"
              />
            </div>
            <div class="list-group-row mt-2">
              <input
                type="text"
                v-model="group.description"
                @input="updateListField(field.name, groupIndex, 'description', $event.target.value)"
                placeholder="강의 설명"
                class="form-control"
              />
            </div>
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
          <div class="add-group-btn">
            <button type="button" @click="addListGroup(field.name)" class="btn btn-primary btn-sm">+</button>
          </div>
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
      useExcel: false,
      excelFile: null,
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

      if (this.useExcel && this.excelFile) {
        formData.append("excelFile", this.excelFile);
      } else if (Array.isArray(modelValue.lists)) {
        const listsJson = JSON.stringify(modelValue.lists);
        const listsBlob = new Blob([listsJson], { type: "application/json" });
        formData.append("lists", listsBlob);
      }

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await api.post("/lectures/add", formData, {
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

    handleExcelFileChange(event) {
      const file = event.target.files[0];
      this.excelFile = file;
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
      // 12시간제 입력(예: "오후 1:00") 또는 24시간제 입력(예: "13:00")을 모두 처리
      // 먼저 12시간제 패턴을 확인합니다.
      const regex12 = /^(오전|오후)\s*(\d{1,2}):(\d{2})$/;
      let match = timeStr.match(regex12);
      if (match) {
        let period = match[1]; // '오전' 또는 '오후'
        let hour = parseInt(match[2], 10);
        const minute = parseInt(match[3], 10);
        // 오후의 경우 12시보다 작으면 12를 더해줍니다.
        if (period === "오후" && hour < 12) {
          hour += 12;
        }
        // 오전 12시는 00시로 변환
        if (period === "오전" && hour === 12) {
          hour = 0;
        }
        // 분을 15분 단위로 반올림
        const roundedMinute = Math.floor(minute / 15) * 15;
        return `${hour.toString().padStart(2, "0")}:${roundedMinute.toString().padStart(2, "0")}`;
      }

      // 24시간제 입력(예: "13:00")일 경우 처리 (기존 로직)
      const regex24 = /^(\d{1,2}):(\d{2})$/;
      match = timeStr.match(regex24);
      if (match) {
        let hour = parseInt(match[1], 10);
        const minute = parseInt(match[2], 10);
        const roundedMinute = Math.floor(minute / 15) * 15;
        return `${hour.toString().padStart(2, "0")}:${roundedMinute.toString().padStart(2, "0")}`;
      }

      // 위의 두 패턴에 맞지 않으면 그대로 반환
      return timeStr;
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

    toggleExcelMode() {
      if (this.useExcel) {
        // Excel 모드에서 목록 입력 모드로 돌아갈 때 백업된 데이터 복구
        if (this.savedLists) {
          this.updateField("lists", this.savedLists);
        }
      } else {
        // 목록 입력 모드에서 Excel 모드로 전환할 때 기존 lists 데이터를 백업
        this.savedLists = [...this.modelValue.lists]; // 깊은 복사하여 원본 데이터 보존
        this.updateField("lists", []);
      }

      this.useExcel = !this.useExcel;
    },

    downloadExcelTemplate() {
      window.open(
        "https://zebal-buket.s3.ap-northeast-2.amazonaws.com/%EA%B0%95%EC%9D%98%EB%A6%AC%EC%8A%A4%ED%8A%B8(Lecture_List)_TEMPLATE.xlsx",
        "_blank"
      );
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
