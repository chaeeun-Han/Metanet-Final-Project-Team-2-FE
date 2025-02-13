<template>
    <div>
        <div class="row g-5 g-xl-8">
            <!-- Class Pick 수수료 -->
            <div class="col-xl-6">
                <div class="card card-flush h-xxl-100">
                    <div class="card-header border-0 pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold fs-3 mb-1">Class Pick 수수료</span>
                            <span class="text-muted fw-semibold fs-7">최근 6개월 정보</span>
                        </h3>
                    </div>
                    <div class="card-body">                        
                        <line-chart :data="chartData1" :options="chartOptions1" />
                    </div>
                </div>
            </div>
            <!-- 학생과 선생님의 비율 -->
            <div class="col-xl-6">
                <div class="card card-flush h-xxl-100">
                    <div class="card-header border-0 pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold fs-3 mb-1">학생과 선생님의 비율</span>                            
                        </h3>
                    </div>
                    <div class="card-body">
                        <div style="max-width: 300px; margin: auto;">
                            <doughnut-chart :data="chartData4" :options="chartOptions4" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6">
                <!-- 가격대 별 강의 -->
                <div class="card card-flush h-xxl-100">
                    <div class="card-header pt-7">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-800">가격대 별 강의</span>
                            <span class="text-gray-500 mt-1 fw-semibold fs-6">1만원대 ~ 5만원대</span>
                        </h3>
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between pb-5 px-0">
                        <bar-chart :data="chartData2" :options="chartOptions2" />
                    </div>
                </div>
            </div>

            <div class="col-xl-6">
                <!-- 회원 나이대 별 수 조회 -->
                <div class="card card-flush h-xxl-100">
                    <div class="card-header pt-7">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-800">회원 나이대 별 수 조회</span>
                            <span class="text-gray-500 mt-1 fw-semibold fs-6">10 ~ 50대</span>
                        </h3>
                    </div>
                    <div class="card-body">
                        <div style="max-width: 300px; margin: auto;">
                            <pie-chart :data="chartData3" :options="chartOptions3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Line, Bar, Pie, Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);


export default {
    name: "Dashboard",
    components: {
        LineChart: Line,
        BarChart: Bar,
        PieChart: Pie,
        DoughnutChart: Doughnut
    },
    props: {
        adminData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            chartOptions4: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '학생과 선생님의 비율'
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            },
            chartData4: {
                labels: ['학생', '선생님'],
                datasets: [{
                    data: [0, 0],  // 초기값
                    backgroundColor: ['#42A5F5', '#FFA726'],
                    hoverBackgroundColor: ['#1E88E5', '#FB8C00']
                }]
            },
            chartOptions1: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '수수료 변동 그래프'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '날짜'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '수수료'
                        }
                    }
                }
            },
            chartData1: {
                labels: [],
                datasets: [{
                    label: '수수료',
                    data: [],
                    borderColor: '#42A5F5', // 파란색 (더 차분하고 시원한 느낌)
                    backgroundColor: 'rgba(66, 165, 245, 0.2)', // 파란색의 투명도 조절된 배경
                    fill: true,
                }]
            },
            chartOptions2: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '가격대 별 강의 수'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '가격대'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '강의 수'
                        }
                    }
                }
            },
            chartData2: {
                labels: ['1만원대', '2만원대', '3만원대', '4만원대', '5만원대'],
                datasets: [{
                    label: '강의 수',
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: '#81C784', // 연두색 계열
                    hoverBackgroundColor: '#66BB6A', // 호버 시 더 진한 연두색
                    borderRadius: 5, // 모서리 둥글게
                }]
            },
            chartOptions3: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '회원 나이대 비율'
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            },
            chartData3: {
                labels: ['10대', '20대', '30대', '40대', '기타'],
                datasets: [{
                    data: [0, 0, 0, 0],
                    backgroundColor: [
                        '#FFCDD2',  // 연한 빨강
                        '#EF9A9A',  // 연한 붉은색
                        '#E57373',  // 붉은색
                        '#EF5350',  // 진한 빨강
                        '#D32F2F',  // 네이비 레드
                    ],
                }]
            }
        };
    },
    methods: {
        updateChartData_1() {
            const dateCategories = [];
            const payPercentData = [];

            if (this.adminData && this.adminData.percentDashboard) {
                this.adminData.percentDashboard.forEach(item => {
                    dateCategories.push(item.date);
                    payPercentData.push(item.payPercent);
                });
            }

            this.chartData1.labels = dateCategories;
            this.chartData1.datasets[0].data = payPercentData;
        },
        updateChartData_2() {
            const priceRanges = ['1만원대', '2만원대', '3만원대', '4만원대', '5만원대'];
            const lectureCount = [0, 0, 0, 0, 0];

            this.adminData.lectureDashboard.forEach(item => {
                const priceIndex = priceRanges.indexOf(item.price);
                if (priceIndex !== -1) {
                    lectureCount[priceIndex] += item.lecNum;
                }
            });

            this.chartData2.datasets[0].data = lectureCount;
        },
        updateChartData_3() {
            const ageData = [0, 0, 0, 0, 0]; // 10대, 20대, 30대, 40대, 기타
            if (this.adminData && this.adminData.memDashboard) {
                this.adminData.memDashboard.forEach(item => {
                    if (item.year === '10대') ageData[0] = item.memNum;
                    else if (item.year === '20대') ageData[1] = item.memNum;
                    else if (item.year === '30대') ageData[2] = item.memNum;
                    else if (item.year === '40대') ageData[3] = item.memNum;
                    else if (item.year === '기타') ageData[4] = item.memNum;
                });
            }

            this.chartData3.datasets[0].data = ageData;
        },
        updateChartData_4() {
            if (this.adminData && this.adminData.studentteacherDashboard.length > 0) {
                this.chartData4.datasets[0].data = [
                    this.adminData.studentteacherDashboard[0].student,
                    this.adminData.studentteacherDashboard[0].teacher
                ];
            }
        },       
    },
    created() {
        this.updateChartData_4();
        this.updateChartData_3();
        this.updateChartData_2();
        this.updateChartData_1();
    }
}
</script>
