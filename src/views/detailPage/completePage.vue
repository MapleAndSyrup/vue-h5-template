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

const companyInfoLoading = inject<Ref<boolean>>('companyInfoLoading')
const companyInfoData = inject<Ref<CompanyInfoData | undefined>>('companyInfoData')

const simName = computed(() => companyInfoData?.value?.name?.slice(0, 2))

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
        <var-card
          variant="filled"
          style="

            --card-filled-background: var(--color-primary);
            --card-content-color: var(--color-on-primary);
          "
        >
          <var-row :gutter="[10, 10]">
            <var-col :span="24">
              <var-paper
                :elevation="10"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 30px;
                  color: var(--color-primary);
                "
                :width="100"
                :height="100"
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
                <var-chip v-for="(tag, index) in companyInfoData?.tag" :key="index" type="primary">
                  {{ tag }}
                </var-chip>
              </div>
            </var-col>
          </var-row>
        </var-card>

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
              <var-chip
                block
                type="info"
                style="
                  flex-direction: column;
                  justify-content: flex-start;
                  height: auto;
                  padding: 4px 8px;
                "
              >
                <p style=" font-weight: bold;color: var(--color-primary)">企业简介</p>
                <p>{{ companyInfoData?.company_intro }}</p>
              </var-chip>
            </var-col>

            <var-col :span="24">
              <div style="display: flex; gap: 10px">
                <var-chip
                  v-for="(tag, index) in companyInfoData?.tag"
                  :key="index"
                  type="primary"
                  size="small"
                >
                  {{ tag }}
                </var-chip>
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
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">匹配分析详情</p>
              <p>{{ investmentMatchData?.match_analysis }}</p>
            </var-chip>
          </var-col>

          <var-col :span="24">
            <div style="display: flex; gap: 10px">
              <var-chip
                v-for="(tag, index) in investmentMatchData?.tag"
                :key="index"
                type="primary"
                size="small"
              >
                {{ tag }}
              </var-chip>
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
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">市场前景</p>
              <p>{{ futureDevelopData?.market_outlook }}</p>
            </var-chip>
          </var-col>

          <var-col :span="24">
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">技术优势</p>
              <p>{{ futureDevelopData?.technical_advantage }}</p>
            </var-chip>
          </var-col>

          <var-col :span="24">
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">扩张计划</p>
              <p>{{ futureDevelopData?.expansion_plan }}</p>
            </var-chip>
          </var-col>

          <var-col :span="24">
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">预期产值</p>
              <p>{{ futureDevelopData?.expected_output_value }}</p>
            </var-chip>
          </var-col>

          <var-col :span="24">
            <div style="display: flex; flex-wrap: wrap; gap: 10px">
              <var-chip
                v-for="(tag, index) in futureDevelopData?.advantages"
                :key="index"
                type="primary"
                size="small"
              >
                {{ tag }}
              </var-chip>
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
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">融资历史</p>

              <var-table>
                <thead>
                  <tr>
                    <th>轮次</th>
                    <th>时间</th>
                    <th>投资方</th>
                    <th>金额</th>
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
            </var-chip>
          </var-col>

          <var-col :span="24">
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">股权结构</p>
              <p>{{ equityStructure }}</p>
            </var-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="landingRequirementLoading">
      <var-card title="落地需求详情">
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
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">具体需求</p>
              <p
                v-for="(specific, index) in landingRequirementData?.specific_requirements"
                :key="index"
              >
                {{ index + 1 }}.{{ specific }}
              </p>
            </var-chip>
          </var-col>

          <var-col :span="24">
            <var-chip
              block
              type="info"
              style="
                flex-direction: column;
                justify-content: flex-start;
                height: auto;
                padding: 4px 8px;
              "
            >
              <p style=" font-weight: bold;color: var(--color-primary)">选址偏好</p>
              <p>{{ landingRequirementData?.location_preference }}</p>
            </var-chip>
          </var-col>
        </var-row>
      </var-card>
    </var-skeleton>

    <var-skeleton :loading="contactPersonLoading">
      <var-card title="对接联系人">
        <var-row :gutter="[10, 10]">
          <var-col v-for="(contact, index) in contacts" :span="24" :key="index">
            <var-chip
              block
              type="info"
              style="justify-content: flex-start; height: auto; padding: 4px 8px"
            >
              <var-space align="center">
                <var-avatar>{{ contact?.firstName }}</var-avatar>

                <var-space direction="column" :size="[0, 0]">
                  <span style="font-size: var(--font-size-lg); color: var(--color-primary)">
                    {{ contact?.name }}
                  </span>
                  <span style="font-size: var(--font-size-sm)">{{ contact?.position }}</span>
                  <span style="font-size: var(--font-size-sm)">{{ contact?.contact_info }}</span>
                </var-space>
              </var-space>
            </var-chip>
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

    <var-row :gutter="[10, 10]">
      <var-col :span="12">
        <var-button>
          <var-icon name="download-outline" style="margin-right: 4px" />
          下载完整资料
        </var-button>
      </var-col>
      <var-col :span="12">
        <var-button type="primary">
          <var-icon name="calendar-month" style="margin-right: 4px" />
          预约实地考察
        </var-button>
      </var-col>
    </var-row>

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
</style>
