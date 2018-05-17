<template>
    <div class="page-w block-center">
        <index-status :list="statusList" ></index-status>
        <quick-entry></quick-entry>
        <overdraft-list></overdraft-list>
    </div>
</template>

<script>
    import {status} from '@/page/index/components/status';
    import IndexStatus from '@/page/index/components/account-status';
    import QuickEntry from '@/page/index/components/quick-entry';
    import OverdraftList from "@/page/index/components/overdraft-list";
    export default {
        name: "index",
        data() {
            return {
                statusList: status
            }
        },
        components: {
            OverdraftList, IndexStatus, QuickEntry
        }
    }
</script>

<style scoped>

</style>