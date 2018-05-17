<template>
    <div class="page-title flex just-center" :style="{background:this.bg,color:this.color}">
        <slot></slot>
        <div v-if="showExport || showLoad" class="flex extend">
            <span @click="exportTabel" v-if="showExport" class="shoushi export"><i class="el-icon-download"></i>导出</span>
            <span @click="reload" v-if="showLoad" class="shoushi load"><i class="el-icon-refresh"></i>刷新</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-title",
        props: {
            bg: {
                type: String,
                default: '#4caee5'
            },
            color: {
                type: String,
                default: '#ffffff'
            },
            showLoad: {
                type: Boolean,
                default: false
            },
            showExport: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            exportTabel(){
                this.$emit('export-tabel');
            },
            reload() {
                this.$emit('reload-table');
            }
        }
    }
</script>

<style scoped>

    .page-title {
        height: 35px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-size: 14px;
        line-height: 35px;
        padding: 0 20px;
    }

    .extend > span {
        margin: 0 10px;
    }
</style>