<template>
  <div class="container bootstrap snippets bootdey">
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-content">
            <h2>Find Robots</h2>
            <small>찾고 싶은 도메인을 입력하세요.</small>

            <div class="">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="url을 입력하세요."
                  name="search"
                  class="form-control input-lg"
                  v-model="findurl"
                />
                <div class="input-group-btn">
                  <button
                    class="btn btn-lg btn-secondary"
                    @click="findRobotBtn"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div class="hr-line-dashed"></div>
            <div id="page-body" class="page-body" v-if="resultStatus === 3">
              검색한 주소 : {{ findurl }}
              <!-- row -->
              <div class="row main-row justify-content-center">
                <!-- Content area
                        ==================================================== -->
                <div id="primary" class="content-area col-lg-12">
                  <!-- Main -->
                  <main id="main" class="content-area-container site-main">
                    <!-- Section -->
                    <div class="main-section">
                      <!-- container -->
                      <div class="container gx-4">
                        <!-- row -->
                        <div class="row gx-36">
                          <!-- col-lg-4 -->
                          <div class="col-lg-4"></div>
                          <!-- /End col-lg-4 -->

                          <!-- col-lg-4 -->
                          <div class="col-lg-4">
                            <!-- Icon block -->
                            <div class="main-block icon-block text-center">
                              <!-- Block container -->
                              <div
                                class="main-block-container icon-block-container"
                              >
                                <!-- Block header -->
                                <div
                                  class="main-block-header icon-block-header icon-solid accent-color-bg white-color"
                                >
                                  <i class="fas fa-exclamation"></i>
                                  <i class="fas fa-exclamation"></i>
                                </div>
                                <!-- /End Block header -->

                                <!-- Block body -->
                                <div class="main-block-body icon-block-body">
                                  <!-- Block heading -->
                                  <div
                                    class="main-block-heading icon-block-heading"
                                  >
                                    <h4>
                                      해당 주소에 Robots.txt를 찾을 수 없습니다.
                                    </h4>
                                  </div>
                                  <!-- /End Block heading -->

                                  <!-- Block content -->

                                  <!-- /End Block content -->
                                </div>
                                <!--/End Block body -->
                              </div>
                              <!-- /End Block container -->
                            </div>
                            <!-- /End Icon block -->

                            <!-- GAP -->
                          </div>
                          <!-- /End col-lg-4 -->

                          <!-- col-lg-4 -->

                          <!-- /End col-lg-4 -->
                        </div>
                        <!-- /End row -->
                      </div>
                      <!-- /End container -->
                    </div>
                  </main>
                  <!-- /End Main -->
                </div>
                <!-- /End Content area -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End Page body -->
            <!-- Page body
                ============================================================ -->
            <div id="page-body" class="page-body" v-if="resultStatus === 2">
              검색한 주소 : {{ findurl }}
              <!-- row -->
              <div class="row main-row justify-content-center">
                <!-- Content area
                        ==================================================== -->
                <div id="primary" class="content-area col-lg-12">
                  <!-- Main -->
                  <main id="main" class="content-area-container site-main">
                    <!-- Section -->
                    <div class="main-section">
                      <!-- container -->
                      <div class="container gx-4">
                        <!-- row -->
                        <div class="row gx-36">
                          <!-- col-lg-4 -->
                          <div class="col-lg-4">
                            <!-- Icon block -->
                            <div class="main-block icon-block text-center">
                              <!-- Block container -->
                              <div
                                class="main-block-container icon-block-container"
                              >
                                <!-- Block header -->
                                <div
                                  class="main-block-header icon-block-header icon-solid accent-color-bg white-color"
                                >
                                  <i class="fas fa-check"></i>
                                  <i class="fas fa-check"></i>
                                </div>
                                <!-- /End Block header -->

                                <!-- Block body -->
                                <div class="main-block-body icon-block-body">
                                  <!-- Block heading -->
                                  <div
                                    class="main-block-heading icon-block-heading"
                                  >
                                    <h4>허용된 경로</h4>
                                  </div>
                                  <!-- /End Block heading -->

                                  <!-- Block content -->
                                  <div
                                    class="main-block-content icon-block-content"
                                  >
                                    <p v-if="Object.keys(permit).length === 0">
                                      해당 주소는 접근을 허용하는 주소를 가지고
                                      있지 않습니다.
                                    </p>
                                    <div v-else>
                                      <div
                                        v-if="
                                          Object.keys(permit).length === 1 &&
                                          permit[0] === '/'
                                        "
                                      >
                                        해당 주소는 모든 경로에 대한 크롤링을
                                        허용합니다.
                                      </div>
                                      <ul
                                        class="list-group list-group-flush"
                                        v-else
                                      >
                                        경로 목록
                                        <li
                                          class="list-group-item"
                                          v-for="route in permit"
                                          :key="route"
                                        >
                                          {{ route }}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!-- /End Block content -->
                                </div>
                                <!--/End Block body -->
                              </div>
                              <!-- /End Block container -->
                            </div>
                            <!-- /End Icon block -->

                            <!-- GAP -->
                            <div class="gap gap-18 d-none d-lg-block"></div>
                            <div class="gap gap-18"></div>

                            <!-- Icon block -->

                            <!-- /End Icon block -->

                            <!-- GAP -->
                            <div class="gap gap-18 d-lg-none"></div>
                          </div>
                          <!-- /End col-lg-4 -->
                          <div class="col-lg-4">
                            <div class="main-block icon-block text-center">
                              <!-- Block container -->
                              <div
                                class="main-block-container icon-block-container"
                              >
                                <!-- Block header -->
                                <div
                                  class="main-block-header icon-block-header icon-solid accent-color-bg white-color"
                                >
                                  <i class="fas fa-exclamation"></i>
                                  <i class="fas fa-exclamation"></i>
                                </div>
                                <!-- /End Block header -->

                                <!-- Block body -->
                                <div class="main-block-body icon-block-body">
                                  <!-- Block heading -->
                                  <div
                                    class="main-block-heading icon-block-heading"
                                  >
                                    <h4>허용되지 않은 경로</h4>
                                  </div>
                                  <!-- /End Block heading -->

                                  <!-- Block content -->
                                  <div
                                    class="main-block-content icon-block-content"
                                  >
                                    <p
                                      v-if="
                                        Object.keys(notAllowed).length === 0
                                      "
                                    >
                                      해당 주소는 직접적으로 명시해둔 허용되지
                                      않은 경로가 없습니다.
                                    </p>

                                    <ul
                                      class="list-group list-group-flush"
                                      v-else
                                    >
                                      경로 목록
                                      <li
                                        class="list-group-item"
                                        v-for="route in notAllowed"
                                        :key="route"
                                      >
                                        {{ route }}
                                      </li>
                                    </ul>
                                  </div>
                                  <!-- /End Block content -->
                                </div>
                                <!--/End Block body -->
                              </div>
                              <!-- /End Block container -->
                            </div>
                          </div>
                          <!-- col-lg-4 -->
                          <div class="col-lg-4">
                            <!-- Icon block -->
                            <div class="main-block icon-block text-center">
                              <!-- Block container -->
                              <div
                                class="main-block-container icon-block-container"
                              >
                                <!-- Block header -->
                                <div
                                  class="main-block-header icon-block-header icon-solid accent-color-bg white-color"
                                >
                                  <i class="fas fa-robot"></i>
                                  <i class="fas fa-robot"></i>
                                </div>
                                <!-- /End Block header -->

                                <!-- Block body -->
                                <div class="main-block-body icon-block-body">
                                  <!-- Block heading -->
                                  <div
                                    class="main-block-heading icon-block-heading"
                                  >
                                    <h4>크롤링 가능한 봇</h4>
                                  </div>
                                  <!-- /End Block heading -->

                                  <!-- Block content -->
                                  <div
                                    class="main-block-content icon-block-content"
                                  >
                                    <p
                                      v-if="
                                        Object.keys(permitBots).length === 0
                                      "
                                    >
                                      해당 주소에서 크롤링이 가능한 봇이
                                      존재하지 않습니다.
                                    </p>
                                    <ul
                                      class="list-group list-group-flush"
                                      v-else
                                    >
                                      봇 이름
                                      <li
                                        class="list-group-item"
                                        v-for="route in permitBots"
                                        :key="route"
                                      >
                                        {{ route }}
                                      </li>
                                    </ul>
                                  </div>
                                  <!-- /End Block content -->
                                </div>
                                <!--/End Block body -->
                              </div>
                              <!-- /End Block container -->
                            </div>
                            <!-- /End Icon block -->

                            <!-- GAP -->
                          </div>
                          <!-- /End col-lg-4 -->

                          <!-- col-lg-4 -->

                          <!-- /End col-lg-4 -->
                        </div>
                        <!-- /End row -->
                      </div>
                      <!-- /End container -->
                    </div>
                  </main>
                  <!-- /End Main -->
                </div>
                <!-- /End Content area -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End Page body -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const findurl = ref();
    const result = ref();
    const resultStatus = ref(1);
    const permit = ref([]);
    const notAllowed = ref([]);
    const permitBots = ref([]);
    const findRobotBtn = async () => {
      console.log(findurl.value);
      try {
        const responseData = await axios.post(
          "http://52.79.49.1:8000/api/v1/find/robot",
          {
            url: findurl.value,
          }
        );
        result.value = responseData.data;

        permitBots.value = result.value.content.permitBots;
        permit.value = result.value.content.permit;
        notAllowed.value = result.value.content.notAllowed;
        resultStatus.value = 2;
        if (
          Object.keys(permit).length +
            Object.keys(permitBots).length +
            Object.keys(notAllowed).length ===
          0
        ) {
          resultStatus.value = 3;
        }
      } catch (err) {
        console.log(err);
        console.log("에러 발생");
        resultStatus.value = 3;
      }
    };
    return {
      findurl,
      findRobotBtn,
      result,
      resultStatus,
      notAllowed,
      permitBots,
      permit,
    };
  },
};
</script>

<style scoped>
body {
  background: #eee;
}
.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 20px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 0px;
}

.search-form {
  margin-top: 10px;
}

.search-result h3 {
  margin-bottom: 0;
  color: #1e0fbe;
}

.search-result .search-link {
  color: #006621;
}

.search-result p {
  font-size: 12px;
  margin-top: 5px;
}

.hr-line-dashed {
  border-top: 1px dashed #e7eaec;
  color: #ffffff;
  background-color: #ffffff;
  height: 1px;
  margin: 20px 0;
}

h2 {
  font-size: 24px;
  font-weight: 100;
}
</style>