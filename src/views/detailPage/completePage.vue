<script setup lang="ts">
import type {
  CompanyInfoData,
  InvestmentMatchData,
  FutureDevelopData,
  EquityInfoData,
  RelatedOpinionData,
  LandingRequirementDetailData,
  ContactPersonData,
  OtherAttentionData
} from '@/api/types'

import JoTag from '../components/JoTag.vue'
import JoChip from '../components/JoChip.vue'

const companyInfoLoading = inject<Ref<boolean>>('companyInfoLoading')
const companyInfoData = inject<Ref<CompanyInfoData | undefined>>('companyInfoData')

const simName = computed(() => companyInfoData?.value?.name?.slice(2, 5))

const investmentMatchLoading = inject<Ref<boolean>>('investmentMatchLoading')
const investmentMatchData = inject<Ref<InvestmentMatchData | undefined>>('investmentMatchData')

const futureDevelopLoading = inject<Ref<boolean>>('futureDevelopLoading')
const futureDevelopData = inject<Ref<FutureDevelopData | undefined>>('futureDevelopData')

const equityInfoLoading = inject<Ref<boolean>>('equityInfoLoading')
const equityInfoData = inject<Ref<EquityInfoData | undefined>>('equityInfoData')
// 股权结构字符串
const equityStructure = computed(() => {
  return equityInfoData?.value?.equity_structure
    ?.map(({ shareholder_name: name, shareholder_type: type, share_ratio: ratio }) => {
      return `${name}（${type}）持股${ratio}%`
    })
    ?.join('；')
})

const relatedOpinionLoading = inject<Ref<boolean>>('relatedOpinionLoading')
const relatedOpinionData = inject<Ref<RelatedOpinionData | undefined>>('relatedOpinionData')

const landingRequirementLoading = inject<Ref<boolean>>('landingRequirementLoading')
const landingRequirementData =
  inject<Ref<LandingRequirementDetailData | undefined>>('landingRequirementData')

const contactPersonLoading = inject<Ref<boolean>>('contactPersonLoading')
const contactPersonData = inject<Ref<ContactPersonData | undefined>>('contactPersonData')
const contacts = computed(() => {
  return contactPersonData?.value?.contacts?.map((contact) => {
    return {
      firstName: contact?.name?.slice(0, 1),
      ...contact
    }
  })
})

const otherAttentionLoading = inject<Ref<boolean>>('otherAttentionLoading')
const otherAttentionData = inject<Ref<OtherAttentionData | undefined>>('otherAttentionData')
</script>
<template>
  <var-space direction="column" style="padding: 10px">
    <var-skeleton card :rows="0" :loading="companyInfoLoading">
      <var-space direction="column">
        <div class="company-info">
          <var-row :gutter="[10, 10]">
            <var-col :span="24">
              <var-paper
                :elevation="10"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 30px;
                  color: #1a237e;
                  border-radius: 12px;
                "
                :width="120"
                :height="120"
              >
                {{ simName }}
              </var-paper>
            </var-col>

            <var-col :span="24">
              <p style="font-size: 30px; line-height: normal">{{ companyInfoData?.name }}</p>
            </var-col>

            <var-col :span="24">
              <p style="font-size: var(--font-size-lg)">{{ companyInfoData?.company_intro }}</p>
            </var-col>

            <var-col :span="24">
              <div style="display: flex; gap: 10px">
                <jo-tag v-for="(tag, index) in companyInfoData?.tag" :key="index">
                  {{ tag }}
                </jo-tag>
              </div>
            </var-col>
          </var-row>
        </div>

        <var-card title="企业基本信息">
          <var-divider />

          <var-row :gutter="[10, 10]">
            <var-col :span="12">
              <p>企业全称</p>
              <p class="main-text">{{ companyInfoData?.name }}</p>
            </var-col>
            <var-col :span="12">
              <p>股票代码</p>
              <p class="main-text">{{ companyInfoData?.stock_code }}</p>
            </var-col>

            <var-col :span="12">
              <p>成立时间</p>
              <p class="main-text">{{ companyInfoData?.update_time }}</p>
            </var-col>
            <var-col :span="12">
              <p>员工规模</p>
              <p class="main-text">{{ companyInfoData?.employee_scale }}</p>
            </var-col>

            <var-col :span="12">
              <p>注册地</p>
              <p class="main-text">{{ companyInfoData?.registered_address }}</p>
            </var-col>
            <var-col :span="12">
              <p>实际经营地</p>
              <p class="main-text">{{ companyInfoData?.actual_operating_address }}</p>
            </var-col>

            <var-col :span="24">
              <jo-chip>
                <template #title>
                  <span style="color: var(--color-primary)">企业简介</span>
                </template>
                <p>{{ companyInfoData?.company_intro }}</p>
              </jo-chip>
            </var-col>

            <var-col :span="24">
              <div style="display: flex; gap: 10px">
                <jo-tag
                  style="
                    color: var(--color-on-primary);
                    background-color: var(--color-primary-container);
                  "
                  v-for="(tag, index) in companyInfoData?.tag"
                  :key="index"
                >
                  {{ tag }}
                </jo-tag>
              </div>
            </var-col>
          </var-row>
        </var-card>
      </var-space>
    </var-skeleton>

    <var-skeleton :loading="investmentMatchLoading">
      <var-card title="招商匹配度分析">
        <var-divider />

        <var-row :gutter="[10, 10]">
          <var-col :span="24">
            <p>产业匹配度</p>
            <var-progress line-width="6" :value="investmentMatchData?.industry_match" label />
          </var-col>

          <var-col :span="24">
            <p>政策匹配度</p>
            <var-progress line-width="6" :value="investmentMatchData?.policy_match" label />
          </var-col>

          <var-col :span="24">
            <p>资源匹配度</p>
            <var-progress line-width="6" :value="investmentMatchData?.resource_match" label />
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">匹配分析详情</p>
              <p>{{ investmentMatchData?.match_analysis }}</p>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <div style="display: flex; gap: 10px">
              <jo-tag
                v-for="(tag, index) in investmentMatchData?.tag"
                :key="index"
                style="
                  color: var(--color-on-primary);
                  background-color: var(--color-primary-container);
                "
              >
                {{ tag }}
              </jo-tag>
            </div>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="futureDevelopLoading">
      <var-card title="发展规划与前景">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">市场前景</p>
              <p>{{ futureDevelopData?.market_outlook }}</p>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">技术优势</p>
              <p>{{ futureDevelopData?.technical_advantage }}</p>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">扩张计划</p>
              <p>{{ futureDevelopData?.expansion_plan }}</p>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">预期产值</p>
              <p>{{ futureDevelopData?.expected_output_value }}</p>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <div style="display: flex; flex-wrap: wrap; gap: 10px">
              <jo-tag
                v-for="(tag, index) in futureDevelopData?.advantages"
                :key="index"
                style="
                  color: var(--color-on-primary);
                  background-color: var(--color-primary-container);
                "
              >
                {{ tag }}
              </jo-tag>
            </div>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="equityInfoLoading">
      <var-card title="股权结构与融资历史">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col :span="12">
            <p>当前融资阶段</p>
            <p class="main-text">{{ equityInfoData?.funding_stage }}</p>
          </var-col>
          <var-col :span="12">
            <p>当前估值</p>
            <p class="main-text">{{ equityInfoData?.valuation_range }}</p>
          </var-col>

          <var-col :span="12">
            <p>IPO计划</p>
            <p class="main-text">{{ equityInfoData?.ipo_plan }}</p>
          </var-col>
          <var-col :span="12">
            <p>实际控制人</p>
            <p class="main-text">{{ equityInfoData?.actual_controller }}</p>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <template #title>
                <p style="font-weight: bold; color: var(--color-primary)">融资历史</p>
              </template>

              <var-table>
                <thead>
                  <tr>
                    <th style="color: var(--color-primary)">轮次</th>
                    <th style="color: var(--color-primary)">时间</th>
                    <th style="color: var(--color-primary)">投资方</th>
                    <th style="color: var(--color-primary)">金额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in equityInfoData?.funding_history" :key="item.round">
                    <td>{{ item.round }}</td>
                    <td>{{ item.time }}</td>
                    <td>
                      <span v-for="(investor, index) in item.investors" :key="index">
                        {{ investor }}{{ index < item.investors.length - 1 ? '、' : '' }}
                      </span>
                    </td>
                    <td>{{ item.amount }}</td>
                  </tr>
                </tbody>
              </var-table>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">股权结构</p>
              <p>{{ equityStructure }}</p>
            </jo-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="landingRequirementLoading">
      <var-card title="落地需求详情">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col :span="12">
            <p>需求类型</p>
            <p class="main-text">{{ landingRequirementData?.requirement_type }}</p>
          </var-col>
          <var-col :span="12">
            <p>拟投资金额</p>
            <p class="main-text">{{ landingRequirementData?.planned_investment }}</p>
          </var-col>

          <var-col :span="12">
            <p>用地需求</p>
            <p class="main-text">{{ landingRequirementData?.land_demand }}</p>
          </var-col>
          <var-col :span="12">
            <p>人员规模</p>
            <p class="main-text">{{ landingRequirementData?.personnel_scale }}</p>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">具体需求</p>
              <p
                v-for="(specific, index) in landingRequirementData?.specific_requirements"
                :key="index"
              >
                {{ index + 1 }}.{{ specific }}
              </p>
            </jo-chip>
          </var-col>

          <var-col :span="24">
            <jo-chip>
              <p style="font-weight: bold; color: var(--color-primary)">选址偏好</p>
              <p>{{ landingRequirementData?.location_preference }}</p>
            </jo-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="contactPersonLoading">
      <var-card title="对接联系人">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col v-for="(contact, index) in contacts" :span="24" :key="index">
            <jo-chip block>
              <var-space align="center">
                <var-avatar
                  style="
                    font-size: 20px;
                    font-weight: bold;
                    background: linear-gradient(135deg, #3d5afe, #00b0ff);
                  "
                >
                  {{ contact?.firstName }}
                </var-avatar>

                <var-space direction="column" :size="[0, 0]">
                  <span style="font-size: var(--font-size-lg); color: #1a237e">
                    {{ contact?.name }}
                  </span>
                  <span style="font-size: var(--font-size-sm)">{{ contact?.position }}</span>
                  <span style="font-size: var(--font-size-sm)">{{ contact?.contact_info }}</span>
                </var-space>
              </var-space>
            </jo-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="relatedOpinionLoading">
      <var-card title="相关舆情与动态">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <template v-for="(news, index) in relatedOpinionData?.news_list" :key="index">
            <var-col :span="24">
              <p class="main-text">{{ news?.news_title }}</p>
              <p>{{ news?.content }}</p>
              <p>{{ news?.time }}·{{ news?.type }}</p>
            </var-col>
            <var-divider v-if="index + 1 < (relatedOpinionData?.news_list?.length ?? 0)" />
          </template>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="otherAttentionLoading">
      <var-card title="其他注意事项">
        <var-divider />
        <var-row :gutter="[10, 10]">
          <var-col
            v-for="attention in otherAttentionData?.attention_list"
            :key="attention.serial_number"
            :span="24"
          >
            <p>{{ attention?.attention_dimension }}</p>
            <p class="main-text">{{ attention?.specific_matter }}</p>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <!-- <var-row :gutter="[10, 10]">
      <var-col :span="12">
        <var-button text outline text-color="#1a237e" size="large">
          <var-icon name="download-outline" style="margin-right: 4px" />
          下载完整资料
        </var-button>
      </var-col>
      <var-col :span="12">
        <var-button type="primary" color="linear-gradient(135deg, #1a237e, #3d5afe)" size="large">
          <var-icon name="calendar-month" style="margin-right: 4px" />
          预约实地考察
        </var-button>
      </var-col>
    </var-row> -->

    <var-back-top :duration="300" :bottom="100" :right="10" />
  </var-space>
</template>

<style scoped lang="scss">
.var-col {
  --skeleton-row-height: 20px;
  --skeleton-row-border-radius: 4px;

  flex-direction: column !important;

  :deep(.var-skeleton__content) {
    padding: 0;
  }

  :deep(.var-skeleton__section) {
    padding: 0;
  }

  :deep(.var-skeleton__row) {
    margin: 0;
  }

  p {
    font-size: var(--font-size-sm);
  }

  .main-text {
    font-size: var(--font-size-md);
    font-weight: bold;
    color: var(--color-text);
  }

  :deep(.var-chip__text-normal) {
    width: 100%;
  }
}

.var-card {
  --card-title-color: var(--color-primary);
  --card-border-radius: 16px;

  :deep(.var-card__title) {
    font-weight: bold;
  }
}

.var-table {
  --table-background: transparent;
  --table-thead-th-font-size: var(--font-size-md);
  --table-tbody-td-font-size: var(--font-size-sm);

  box-shadow: none;
}

.company-info {
  padding: 12px;
  color: white;
  background: linear-gradient(135deg, #1a237e, #3d5afe);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgb(29 41 126 / 20%);
}
</style>
