<template>
  <div id="page-body" class="page-body">
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
                <!-- col-lg-3 -->
                <div class="col-lg-3">
                  <!-- Section title -->
                  <div class="section-title">
                    <!-- Section title container -->
                    <div class="section-title-container">
                      <!-- Section title body -->
                      <div class="section-title-body">
                        <!-- Section title heading -->
                        <div class="section-title-heading">
                          <h3>제작 의도</h3>
                        </div>
                        <!-- /End Section title heading -->
                      </div>
                      <!--/End Section title body -->
                    </div>
                    <!-- /End Section title container -->
                  </div>
                  <!-- /End Section title -->
                </div>
                <!-- /End col-lg-3 -->

                <!-- col-lg-9 -->
                <div class="col-lg-9">
                  <!-- Text block -->
                  <div class="main-block text-block">
                    <!-- Block container -->
                    <div class="main-block-container text-block-container">
                      <!-- Block body -->
                      <div class="main-block-body text-block-body">
                        <!-- Block content -->
                        <div class="main-block-content text-block-content">
                          <p>
                            4차 산업 혁명과 코로나의 여파로 IT시장은 큰 성장을
                            이루었습니다. 이에 따라 개발 인력이 크게
                            증가했습니다. 초,중,고등학생부터 대학교 교양
                            수업으로까지 많은 학생들이 코딩을 접합니다. 파이썬
                            수업을 진행하다 보면 크롤링이라는 단어는 무조건 한
                            번쯤 듣게 됩니다. 개발자를 꿈꾸는 많은 학생들이 쉽고
                            편하게 크롤링을 진행했으면 좋겠다는 바람으로
                            Crawling Plus를 제작하게 되었습니다.
                          </p>
                        </div>
                        <!-- /End Block content -->
                      </div>
                      <!--/End Block body -->
                    </div>
                    <!-- /End Block container -->
                  </div>
                  <!-- /End Text block -->
                </div>
                <!-- /End col-lg-9 -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End container -->
          </div>
          <!-- /End Section -->

          <!-- Section -->
          <div class="main-section section-fullwidth pt-0 pb-0">
            <!-- container -->
            <div class="container-fluid gx-0">
              <!-- row -->
              <div class="row gx-36">
                <!-- col-lg-12 -->
                <div class="col-lg-12">
                  <div
                    class="hr-divider hr-divider-layout-3 hr-divider-1px-border hr-divider-fullwidth grey-2-color"
                  ></div>
                </div>
                <!-- /End col-lg-12 -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End container -->
          </div>
          <!-- /End Section -->

          <!-- Section -->
          <div class="main-section">
            <!-- container -->
            <div class="container gx-4">
              <!-- row -->
              <div class="row gx-36">
                <!-- col-lg-3 -->
                <div class="col-lg-3">
                  <!-- Section title -->
                  <div class="section-title">
                    <!-- Section title container -->
                    <div class="section-title-container">
                      <!-- Section title body -->
                      <div class="section-title-body">
                        <!-- Section title heading -->
                        <div class="section-title-heading">
                          <h3>주요 기능</h3>
                        </div>
                        <!-- /End Section title heading -->
                      </div>
                      <!--/End Section title body -->
                    </div>
                    <!-- /End Section title container -->
                  </div>
                  <!-- /End Section title -->
                </div>
                <!-- /End col-lg-3 -->

                <!-- col-lg-9 -->
                <div class="col-lg-9">
                  <!-- Text block -->
                  <div class="main-block text-block">
                    <!-- Block container -->
                    <div class="main-block-container text-block-container">
                      <!-- Block body -->
                      <div class="main-block-body text-block-body">
                        <!-- Block content -->
                        <div class="main-block-content text-block-content">
                          <h5>ROBOTS.TXT 찾기</h5>
                          <p>
                            robots.txt는 웹사이트에 웹 크롤러같은 로봇들의
                            접근을 제어하기 위한 규약입니다. 아직 권고안이라 꼭
                            지킬 의무는 없습니다. 크롤러들은 주로 검색엔진들의
                            인덱싱 목적으로 사용되는데, 웹사이트들 입장에서도 더
                            많은 검색 노출을 원하는게 일반적이므로 딱히 막을
                            이유는 없습니다. 다만 서버의 트래픽이
                            한정되어있거나, 검색엔진에서의 노출을 원하지 않는
                            경우, 이 robots.txt에 안내문 형식으로 특정 경로에
                            대한 크롤링을 자제해 줄 것을 권고하는 것 입니다.
                            지킬 의무가 없다고 하나 지켜주는 게 상식이며
                            마찬가지로 서버 주인 입장에서는 규칙을 지키지 않는
                            크롤링이 들어오는데도 계속해서 서비를 제공할 의무
                            또한 없으므로 크롤러의 아이피를 차단하면 그만입니다.
                          </p>

                          <p>
                            Crawling Plus는 딱딱하게 되어있는 robots.txt 파일을
                            조금 더 직관적으로 보여줍니다. 상단의 FIND ROBOT
                            메뉴에서 웹페이지의 robots.txt를 확인해보세요!
                          </p>
                          <h5>Find Robot API</h5>
                          <p>
                            해당 홈페이지의 제작을 위해 파이썬과 FastAPI를
                            활용하여 API를 제작하였습니다. URL정보를 요청받아
                            해당 웹페이지의 ROBOTS.TXT 정보를 응답하는
                            API입니다.
                          </p>

                          <p>출처 나무위키 : https://namu.wiki/w/robots.txt</p>
                        </div>
                        <!-- /End Block content -->
                      </div>
                      <!--/End Block body -->
                    </div>
                    <!-- /End Block container -->
                  </div>
                  <!-- /End Text block -->
                </div>
                <!-- /End col-lg-9 -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End container -->
          </div>
          <!-- /End Section -->

          <!-- Section -->
          <div class="main-section section-fullwidth pt-0 pb-0">
            <!-- container -->
            <div class="container-fluid gx-0">
              <!-- row -->
              <div class="row gx-36">
                <!-- col-lg-12 -->
                <div class="col-lg-12">
                  <div
                    class="hr-divider hr-divider-layout-3 hr-divider-1px-border hr-divider-fullwidth grey-2-color"
                  ></div>
                </div>
                <!-- /End col-lg-12 -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End container -->
          </div>
          <!-- /End Section -->

          <!-- Section -->
          <div class="main-section">
            <!-- container -->
            <div class="container gx-4">
              <!-- row -->
              <div class="row gx-36">
                <!-- col-lg-3 -->
                <div class="col-lg-3">
                  <!-- Section title -->
                  <div class="section-title">
                    <!-- Section title container -->
                    <div class="section-title-container">
                      <!-- Section title body -->
                      <div class="section-title-body">
                        <!-- Section title heading -->
                        <div class="section-title-heading">
                          <h3>추후 업데이트</h3>
                        </div>
                        <!-- /End Section title heading -->
                      </div>
                      <!--/End Section title body -->
                    </div>
                    <!-- /End Section title container -->
                  </div>
                  <!-- /End Section title -->
                </div>
                <!-- /End col-lg-3 -->

                <!-- col-lg-9 -->
                <div class="col-lg-9">
                  <!-- Text block -->
                  <div class="main-block text-block">
                    <!-- Block container -->
                    <div class="main-block-container text-block-container">
                      <!-- Block body -->
                      <div class="main-block-body text-block-body">
                        <!-- Block content -->
                        <div class="main-block-content text-block-content">
                          <h5>Crawling Helper</h5>
                          <p>
                            파이썬으로 크롤링을 진행하다보면 class,id 와 태그의
                            정보가 필요합니다. 이를 조금 더 편하게 찾고 크롤링할
                            수 있도록 도와주는 Crawling Helper를 개발중에
                            있습니다.
                          </p>
                        </div>
                        <!-- /End Block content -->
                      </div>
                      <!--/End Block body -->
                    </div>
                    <!-- /End Block container -->
                  </div>
                  <!-- /End Text block -->
                </div>
                <!-- /End col-lg-9 -->
              </div>
              <!-- /End row -->
            </div>
            <!-- /End container -->
          </div>
          <!-- /End Section -->
        </main>
        <!-- /End Main -->
      </div>
      <!-- /End Content area -->
    </div>
    <!-- /End row -->
  </div>
  <!-- /End Page body -->
</template>

<script>
export default {};
</script>

<style>
</style>