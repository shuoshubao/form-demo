<template>
    <div>
        <el-form ref="form" :model="formModel" label-width="0">
            <el-table :data="tableData" bordered>
                <el-table-column prop="date" label="日期" width="160">
                    <template slot-scope="scope">
                        <el-form-item :prop="`tableData.${scope.$index}.date`" :rules="formRules.date">
                            <el-date-picker type="date" v-model="scope.row.date" style="width: 140px;" />
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                    <template slot-scope="scope">
                        <el-form-item :prop="`tableData.${scope.$index}.name`" :rules="formRules.name">
                            <el-input v-model="scope.row.name" style="width: 130px;" />
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="地址">
                    <template slot-scope="scope">
                        <el-form-item :prop="`tableData.${scope.$index}.address`" :rules="formRules.address">
                            <el-input v-model="scope.row.address" style="width: 300px;" />
                        </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text-primary" size="small" @click="handleDelete(scope.$index, arguments[0])">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <div style="margin-top: 10px;">
            <el-button type="primary" @click="handleAdd">增加一行</el-button>
        </div>
        <div style="margin-top: 10px;">
            <el-button type="primary" @click="handleSubmit">保存</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import { rules, pifyValidate } from '@nbfe/tools';

const { required } = rules;

@Component({})
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

    created() {
        console.log('🍉22', 'window.location.href');
        console.log(window.location.href);
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
        this.$message({ type: 'info', message: `校验结果: ${validate}` });
        if (!validate) {
            this.$message({ type: 'error', message: '表单项填写存在错误！请检查' });
            // eslint-disable-next-line no-useless-return
            return;
        }
    }
}
</script>
