<template>
    <div class="card card-xl-stretch mb-xl-8">
        <!--begin::Header-->
        <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold fs-3 mb-1">최근 6개월 수익</span>
                <span class="text-muted fw-semibold fs-7">월별 강의 수익을 확인하세요</span>
            </h3>
        </div>
        <!--end::Header-->

        <!-- 차트 추가 (가운데 정렬) -->
        <div class="card-body d-flex justify-content-center">
            <canvas id="revenueChart" @click="handleChartClick" style="display: block;"></canvas>
        </div>
    </div>

    <!-- 선택된 월 표시 및 페이지네이션 화살표 -->
    <div class="card card-flush mb-15">
        <div class="card-header align-items-center py-5 gap-2 gap-md-5">
            <div class="card-title">
                <h3 class="fw-bold">수익 내역 전체보기</h3>
            </div>
            <!-- 선택된 월 표시 및 화살표 -->
            <div class="d-flex justify-content-between align-items-center">
                <button class="btn btn-icon" @click="changeMonth('previous')">
                    <i class="bi bi-arrow-left-circle"></i>
                </button>
                <span class="fw-bold fs-4">{{ selectedMonth }}</span>
                <button class="btn btn-icon" @click="changeMonth('next')">
                    <i class="bi bi-arrow-right-circle"></i>
                </button>
            </div>
        </div>

        <div class="card-body pt-0" style="min-height: 300px;">
            <div class="table-responsive">
                <table class="table align-middle table-row-dashed fs-6 gy-5" style="table-layout: fixed; width: 100%;">
                    <thead>
                        <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                            <th class="min-w-100px">강의일련번호</th>
                            <th class="min-w-175px">강의명</th>
                            <th class="text-center min-w-70px">상태</th>
                            <th class="text-end min-w-100px">수익금</th>
                            <th class="text-end min-w-100px">강의 제공 월</th>
                        </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">
                        <tr v-for="lecture in lectureDetails" :key="lecture.lectureId">
                            <td>
                                <a href="#" class="text-gray-800 text-hover-primary fw-bold">{{ lecture.lectureId }}</a>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a href="#" class="text-gray-800 text-hover-primary fs-5 fw-bold">{{ lecture.title }}</a>
                                </div>
                            </td>
                            <td class="text-center pe-0">
                                <div class="badge" :class="getStatusBadgeClass(lecture.status)">{{ lecture.status }}</div>
                            </td>
                            <td class="text-end pe-3">
                                <span class="fw-bold">{{ formatPrice(lecture.price) }}</span>
                            </td>
                            <td class="text-end">
                                <span class="fw-bold">{{ lecture.month }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
import api from "../../apis/api";
import Chart from "chart.js/auto";
export default {
    data() {
        return {
            monthlySales: [],
            lectureDetails: [],
            selectedMonth: this.getCurrentMonth(),
            chartInstance: null, // Chart.js 인스턴스 저장
            months: this.getLastSixMonths() // 6개월 전부터 현재 달까지
        };
    },
    methods: {
        formatPrice(price) {
        return price.toLocaleString(); // 가격을 세자리마다 쉼표로 구분
        },
        createChart() {
            const ctx = document.getElementById("revenueChart").getContext("2d");
            if (!ctx) return;  // 컨텍스트가 없으면 차트 생성하지 않음
            this.chartInstance = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: this.monthlySales.map(item => item.month),
                    datasets: [
                        {
                            label: "월별 총 매출",
                            data: this.monthlySales.map(item => item.totalRevenue),
                            backgroundColor: "rgba(54, 162, 235, 0.5)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        },
        // 차트 클릭 이벤트 처리
        handleChartClick(event) {
            const chart = this.chartInstance; // chartInstance로 변경
            const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
            if (points.length) {
                const firstPoint = points[0];
                const label = chart.data.labels[firstPoint.index];  // 클릭된 월 정보
                this.selectedMonth = label;
                this.fetchRevenueData(); // 해당 월로 백엔드 요청
            }
        },
        // 이전/다음 월로 이동
        changeMonth(direction) {
            const currentIndex = this.months.indexOf(this.selectedMonth);
            let newIndex = direction === 'previous' ? currentIndex - 1 : currentIndex + 1;
            if (newIndex < 0) newIndex = this.months.length - 1;
            if (newIndex >= this.months.length) newIndex = 0;
            this.selectedMonth = this.months[newIndex];
            this.fetchRevenueData(); // 해당 월로 백엔드 요청
        },
        // 현재 월 반환 (예: "2025-02")
        getCurrentMonth() {
            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            return `${year}-${month}`;
        },
        // 6개월 전부터 현재까지의 월 목록을 반환
        getLastSixMonths() {
            const result = [];
            const date = new Date();
            for (let i = 5; i >= 0; i--) {
                const newDate = new Date(date.getFullYear(), date.getMonth() - i, 1);
                const year = newDate.getFullYear();
                const month = String(newDate.getMonth() + 1).padStart(2, "0");
                result.push(`${year}-${month}`);
            }
            return result;
        },
        formatMonthlySalesData(data) {
            const salesMap = new Map(data.map((item) => [item.month, item.totalRevenue]));
            return this.months.map((month) => ({
                month,
                totalRevenue: salesMap.get(month) || 0
            }));
        },
        // 매출 데이터 가져오기
        async fetchRevenueData() {
            try {
                const token = sessionStorage.getItem("accessToken");
                const response = await api.get(`/account/revenue`, {
                    params: { month: this.selectedMonth },
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                console.log(response.data.data);
                this.monthlySales = this.formatMonthlySalesData(response.data.data.monthlySales);
                this.lectureDetails = response.data.data.lectureDetails;
                this.updateChart();
            } catch (error) {
                console.error("매출 데이터 가져오기 실패:", error);
            }
        },
        updateChart() {
            const ctx = document.getElementById("revenueChart").getContext("2d");
            const labels = this.monthlySales.map((item) => item.month);
            const data = this.monthlySales.map((item) => item.totalRevenue);
            if (this.chartInstance) {
                this.chartInstance.destroy();
            }
            this.chartInstance = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "월별 총 수익",
                            data: data,
                            backgroundColor: "rgba(54, 162, 235, 0.5)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        },
        getStatusBadgeClass(status) {
            switch (status) {
                case "강의중":
                    return "badge-light-success";
                case "강의종료":
                    return "badge-light-danger";
                default:
                    return "badge-light-secondary";
            }
        }
    },
    mounted() {
        this.createChart();
        this.fetchRevenueData();
    }
};
</script>

<style scoped>
.badge-light-success {
    background-color: #d1f0d1;
    color: #1b8e1b;
}
.badge-light-danger {
    background-color: #f8d7da;
    color: #a71d2a;
}
.badge-light-secondary {
    background-color: #e2e3e5;
    color: #383d41;
}
</style>