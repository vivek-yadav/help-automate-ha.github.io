<script>
    let node_counts
    let comp_scan_feq
    let client_run_feq
    let event_feed_feq
    let data_ret_policy
    let comp_scan_report_size
    let client_run_report_size
    let event_feed_update_size

</script>
<!--on:submit|preventDefault={submitForm} -->
<form >
    <div class="grid gap-6 mb-6 md:grid-cols-4">
        <div>
            <label for="node_counts" class="txt-box-lable-black">Number of nodes sending data</label>
            <input type="text" id="node_counts" name="node_counts" class="txt-box-black" bind:value={node_counts}>
        </div>
        <div>
            <label for="comp_scan_feq" class="txt-box-lable-black">Frequency of compliance scan</label>
            <input type="text" id="comp_scan_feq" name="comp_scan_feq" class="txt-box-black" bind:value={comp_scan_feq}>
            <select class="select_generic">
                <option value="comp_scan_feq_per_hour"> Per Hour </option>
            </select>
        </div>
        <div>
            <label for="client_run_feq" class="txt-box-lable-black">Frequency of compliance scan</label>
            <input type="text" id="client_run_feq" name="client_run_feq" class="txt-box-black" bind:value={client_run_feq}>
            <select class="select_generic">
                <option value="client_run_feq_per_hour"> Per Hour </option>
            </select>
        </div>
        <div>
            <label for="event_feed_feq" class="txt-box-lable-black">Frequency of compliance scan</label>
            <input type="text" id="event_feed_feq" name="event_feed_feq" class="txt-box-black" bind:value={event_feed_feq}>
            <select class="select_generic">
                <option value="event_feed_feq_per_hour"> Per Hour </option>
            </select>
        </div>
        <div>
            <label for="data_ret_policy" class="txt-box-lable-black">Data retention policy</label>
            <input type="text" id="data_ret_policy" name="data_ret_policy" class="txt-box-black" bind:value={data_ret_policy}>
            <select class="select_generic">
                <option value="data_ret_policy_days"> Days </option>
            </select>
        </div>
        <div>
            <label for="comp_scan_report_size" class="txt-box-lable-black">Compliance Scan Report Size</label>
            <input type="text" id="comp_scan_report_size" name="comp_scan_report_size" class="txt-box-black" bind:value={comp_scan_report_size}>
            <select class="select_generic">
                <option value="comp_scan_report_size_kb"> KB </option>
                <option value="comp_scan_report_size_mb"> MB </option>
            </select>
        </div>
        <div>
            <label for="client_run_report_size" class="txt-box-lable-black">Compliance Scan Report Size</label>
            <input type="text" id="client_run_report_size" name="client_run_report_size" class="txt-box-black" bind:value={client_run_report_size}>
            <select class="select_generic">
                <option value="client_run_report_size_kb"> KB </option>
                <option value="client_run_report_size_mb"> MB </option>
            </select>
        </div>
        <div>
            <label for="event_feed_update_size" class="txt-box-lable-black">Compliance Scan Report Size</label>
            <input type="text" id="event_feed_update_size" name="event_feed_update_size" class="txt-box-black" bind:value={event_feed_update_size}>
            <select class="select_generic">
                <option value="event_feed_update_size_kb"> KB </option>
                <option value="event_feed_update_size_mb"> MB </option>
            </select>
        </div>
    </div>
</form>