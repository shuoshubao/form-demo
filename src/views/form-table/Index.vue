<template>
    <div>
        <mtd-form ref="form" :model="formModel" :label-width="0">
            <mtd-table :data="tableData" bordered>
                <mtd-table-column prop="date" label="日期" width="160">
                    <template slot-scope="scope">
                        <mtd-form-item :prop="`tableData.${scope.$index}.date`" :rules="formRules.date">
                            <mtd-date-picker type="date" v-model="scope.row.date" style="width: 140px;" />
                        </mtd-form-item>
                    </template>
                </mtd-table-column>
                <mtd-table-column prop="name" label="姓名" width="180">
                    <template slot-scope="scope">
                        <mtd-form-item :prop="`tableData.${scope.$index}.name`" :rules="formRules.name">
                            <mtd-input v-model="scope.row.name" style="width: 130px;" />
                        </mtd-form-item>
                    </template>
                </mtd-table-column>
                <mtd-table-column prop="address" label="地址">
                    <template slot-scope="scope">
                        <mtd-form-item :prop="`tableData.${scope.$index}.address`" :rules="formRules.address">
                            <mtd-input v-model="scope.row.address" style="width: 300px;" />
                        </mtd-form-item>
                    </template>
                </mtd-table-column>
                <mtd-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <mtd-button type="text-primary" size="small" @click="handleDelete(scope.$index, arguments[0])">
                            删除
                        </mtd-button>
                    </template>
                </mtd-table-column>
            </mtd-table>
        </mtd-form>
        <div style="margin-top: 10px;">
            <mtd-button type="primary" @click="handleAdd">增加一行</mtd-button>
        </div>
        <div style="margin-top: 10px;">
            <mtd-button type="primary" @click="handleSubmit">保存</mtd-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import { rules, pifyValidate } from '@datafe/tools';

const { required } = rules;

@Component
export default class App extends Vue {
    @Ref('form') readonly form!: any;

    // 表格数据
    tableData = [
        {
            date: '2016-05-03',
            name: '美小团',
            address: '北京市朝阳区望京东路四号'
        },
        {
            date: '2016-05-02',
            name: '美小团',
            address: '北京市朝阳区望京东路四号'
        }
    ];

    // 校验规则
    formRules = {
        date: [required()],
        name: [required()],
        address: [required()]
    };

    // 复制一份表格数据
    get formModel() {
        return {
            tableData: this.tableData
        };
    }

    // 删除一行
    async handleDelete(index) {
        this.tableData.splice(index, 1);
        await this.$nextTick();
        this.handleValidate();
    }

    // 新增一行
    handleAdd() {
        this.tableData.push({
            date: '',
            name: '',
            address: ''
        });
    }

    // 校验
    async handleValidate() {
        this.form.clearValidate();
        return await pifyValidate(this.form.validate);
    }

    // 提交
    async handleSubmit() {
        const validate = await this.handleValidate();
        this.$mtd.message({ type: 'info', message: `校验结果: ${validate}` });
        if (!validate) {
            this.$mtd.message({ type: 'error', message: '表单项填写存在错误！请检查' });
            // eslint-disable-next-line no-useless-return
            return;
        }
    }
}
</script>
