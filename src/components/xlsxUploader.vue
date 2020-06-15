<template>
  <div class="xlsx-container">
    <el-upload
      ref="upload"
      :show-file-list="false"
      :limit="1"
      :auto-upload="false"
      :on-change="onChange"
      :disabled="disabled"
      action="1"
      class="xlsx-uploader"
      accept=".xlsx"
    >
      <el-button
        :disabled="disabled"
        size="mini"
        type="primary"
      >
        {{ buttonText }}
      </el-button>
    </el-upload>
  </div>
</template>

<script>
import { Notification } from 'element-ui';
import { readXlsx2Json, jsonToExcel } from '../utils/xlsx';

export default {
  components: {},
  props: {
    buttonText: {
      type: String,
      default: '上传xlsx文件',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    onChange(file) {
      try {
        readXlsx2Json(file.raw).onEnded = (wbArray) => {
          this.$emit('loadSucc', wbArray);
        };
      } catch (e) {
        Notification.error({
          title: '上传失败',
          message: e.message,
          duration: 4000,
        });
        this.$emit('loadSucc', []);
      } finally {
        this.$refs.upload.clearFiles();
      }
    },
    downloadCity() {
      if (this.initialCities && this.initialCities.length) {
        jsonToExcel({
          json: this.initialCities.map(e => ({
            name: e.name,
          })),
          sheetName: '城市列表',
          fileName: '全部城市.xlsx',
          opts: {
            cellStyles: true,
            defaultCellStyle: {
              font: { name: 'Verdana', sz: 13, color: 'FF00FF88' },
              fill: { fgColor: { rgb: 'FFFFAA00' } },
            },
          },
          showGridLines: false,
          retType: 'file',
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.xlsx-container {
  line-height: 0;
  margin-left: 8px;
  display: inline-block;

  & /deep/ .el-upload--text{
    border: none;
    width: auto;
    height: auto;
  }

  & /deep/ .el-button--small {
    height: 36px;
  }
}
</style>
