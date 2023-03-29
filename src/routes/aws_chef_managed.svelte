<script>
	//import { profile } from 'console';
  import fs from 'fs';
  //import { createRequire } from 'module';
  //const require = createRequire(import.meta.url);
  //var toml = require('toml');
  //var concat = require('concat-stream');

  export let ssh_user = ""
  export let ssh_port = ""
  export let ssh_key_file = ""
  export let sudo_password = ""
  export let backup_config = ""
  export let s3_bucketName =""
  export let secrets_key_file = ""
  export let secrets_store_file = ""
  export let architecture = ""
  export let workspace_path = ""
  export let backup_mount = ""
  export let automate_fqdn = ""
  export let automate_admin_password = ""
  export let automate_instance_count = ""
  export let automate_config_file = ""
  export let automate_enable_custom_certs = ""
  export let automate_root_ca = ""
  export let automate_private_key = ""
  export let automate_public_key = ""
  export let cs_instance_count = ""
  export let cs_enable_custom_certs = ""
  export let cs_private_key = ""
  export let cs_public_key = ""
  export let os_instance_count = ""
  export let os_enable_custom_certs = ""
  export let os_root_ca = ""
  export let os_admin_key = ""
  export let os_admin_cert = ""
  export let os_private_key = ""
  export let os_public_key = ""
  export let pg_instance_count = ""
  export let pg_enable_custom_certs = ""
  export let pg_root_ca = ""
  export let pg_private_key = ""
  export let pg_public_key = ""
  export let network_profile = ""
  export let network_region = ""
  export let network_aws_vpc_id = ""
  export let network_aws_cidr_block_addr = ""
  export let network_private_custom_subnets = ""
  export let network_public_custom_subnets = ""
  export let network_ssh_key_pair_name = ""
  export let setup_managed_services = "" 
  export let ami_id = ""
  export let delete_on_termination = ""
  export let automate_server_instance_type = ""
  export let chef_server_instance_type = ""
  export let opensearch_server_instance_type = ""
  export let postgresql_server_instance_type = ""
  export let automate_lb_certificate_arn = ""
  export let chef_server_lb_certificate_arn = ""
  export let automate_ebs_volume_iops = ""
  export let automate_ebs_volume_size = ""
  export let automate_ebs_volume_type = ""
  export let chef_ebs_volume_iops = ""
  export let chef_ebs_volume_size = ""
  export let chef_ebs_volume_type = ""
  export let opensearch_ebs_volume_iops = ""
  export let opensearch_ebs_volume_size = ""
  export let opensearch_ebs_volume_type = ""
  export let postgresql_ebs_volume_iops = ""
  export let postgresql_ebs_volume_size = ""
  export let postgresql_ebs_volume_type = ""
  export let lb_access_logs = ""
  export let x_contact = ""
  export let x_dept = ""
  export let x_project = ""

  console.log(ssh_user)

  const data = {
      ssh_user : ssh_user,
      ssh_port : ssh_port,
      ssh_key_file : ssh_key_file,
      sudo_password : sudo_password,
      backup_config : backup_config,
      s3_bucketName : s3_bucketName,
      secrets_key_file : secrets_key_file,
      secrets_store_file : secrets_store_file,
      architecture : architecture,
      workspace_path : workspace_path,
      backup_mount : backup_mount,
      automate_fqdn : automate_fqdn,
      automate_admin_password : automate_admin_password,
      automate_instance_count : automate_instance_count,
      automate_config_file : automate_config_file,
      automate_enable_custom_certs : automate_enable_custom_certs,
      automate_root_ca : automate_root_ca,
      automate_private_key : automate_private_key,
      automate_public_key : automate_public_key,
      cs_instance_count : cs_instance_count,
      cs_enable_custom_certs : cs_enable_custom_certs,
      cs_private_key : cs_private_key,
      cs_public_key : cs_public_key,
      os_instance_count : os_instance_count,
      os_enable_custom_certs : os_enable_custom_certs,
      os_root_ca : os_root_ca,
      os_admin_key : os_admin_key,
      os_admin_cert : os_admin_cert,
      os_private_key : os_private_key,
      os_public_key : os_public_key,
      pg_instance_count : pg_instance_count,
      pg_enable_custom_certs : pg_enable_custom_certs,
      pg_root_ca : pg_root_ca,
      pg_private_key : pg_private_key,
      pg_public_key : pg_public_key,
      network_profile : network_profile,
      network_region : network_region,
      network_aws_vpc_id : network_aws_vpc_id,
      network_aws_cidr_block_addr : network_aws_cidr_block_addr,
      network_private_custom_subnets : network_private_custom_subnets,
      network_public_custom_subnets : network_public_custom_subnets,
      network_ssh_key_pair_name : network_ssh_key_pair_name,
      setup_managed_services : setup_managed_services,
      
      ami_id : ami_id,
      delete_on_termination : delete_on_termination,
      automate_server_instance_type : automate_server_instance_type,
      chef_server_instance_type : chef_server_instance_type,
      opensearch_server_instance_type : opensearch_server_instance_type,
      postgresql_server_instance_type : postgresql_server_instance_type,
      automate_lb_certificate_arn : automate_lb_certificate_arn,
      chef_server_lb_certificate_arn : chef_server_lb_certificate_arn,
      automate_ebs_volume_iops : automate_ebs_volume_iops,
      automate_ebs_volume_size : automate_ebs_volume_size,
      automate_ebs_volume_type : automate_ebs_volume_type,
      chef_ebs_volume_iops : chef_ebs_volume_iops,
      chef_ebs_volume_size : chef_ebs_volume_size,
      chef_ebs_volume_type : chef_ebs_volume_type,
      opensearch_ebs_volume_iops : opensearch_ebs_volume_iops,
      opensearch_ebs_volume_size : opensearch_ebs_volume_size,
      opensearch_ebs_volume_type : opensearch_ebs_volume_type,
      postgresql_ebs_volume_iops : postgresql_ebs_volume_iops,
      postgresql_ebs_volume_size : postgresql_ebs_volume_size,
      postgresql_ebs_volume_type : postgresql_ebs_volume_type,
      lb_access_logs : lb_access_logs,
      x_contact : x_contact,
      x_dept : x_dept,
      x_project : x_project,
  };

  function download(filename, text) {
    let type="text/plain"
    // Create an invisible A element
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);
    // Set the HREF to a Blob representation of the data to be downloaded
    a.href = window.URL.createObjectURL(
      new Blob([text], { type })
    );
    // Use download attribute to set set desired file name
    a.setAttribute("download", filename);
    // Trigger the download by simulating click
    a.click();
    // Cleanup
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
}

  const submitForm = (event) => {
    let ptagEle =  document.getElementById('aws_chef_managed_config')
    let ptagData = ptagEle.innerHTML
    console.log(ptagData)
    download("config.toml", ptagData)
}
</script>
<form on:submit|preventDefault={submitForm}>
  <div class="grid gap-6 mb-6 md:grid-cols-4">
      <div>
          <label for="ssh_user" class="txt-box-lable-black">SSH User</label>
          <input type="text" id="ssh_user" name="ssh_user" class="txt-box-black" bind:value={ssh_user}>
      </div>
      <div>
          <label for="ssh_port" class="txt-box-lable-black">SSH Port</label>
          <input type="text" id="ssh_port" name="ssh_port" class="txt-box-black" bind:value={ssh_port}>
      </div>
      <div>
          <label for="ssh_key_file" class="txt-box-lable-black">SSH Key File</label>
          <input type="text" id="ssh_key_file" name="ssh_key_file" class="txt-box-black" bind:value={ssh_key_file}>
      </div>
      <div>
        <label for="sudo_password" class="txt-box-lable-black">Sudo Password</label>
        <input type="text" id="sudo_password" name="sudo_password" class="txt-box-black" bind:value={sudo_password}>
    </div>
      <div>
          <label for="backup_config" class="txt-box-lable-black">Backup Config</label>
          <input type="text" id="backup_config" name="backup_config" class="txt-box-black" bind:value={backup_config}>
      </div>
      <div>
          <label for="s3_bucketName" class="txt-box-lable-black">s3_bucketName</label>
          <input type="text" id="s3_bucketName" name="s3_bucketName" class="txt-box-black" bind:value={s3_bucketName}>
      </div>
      <div>
          <label for="secrets_key_file" class="txt-box-lable-black">secrets_key_file</label>
          <input type="text" id="secrets_key_file" name="secrets_key_file" class="txt-box-black" bind:value={secrets_key_file}>
      </div>
      <div>
          <label for="secrets_store_file" class="txt-box-lable-black">secrets_store_file</label>
          <input type="text" id="secrets_store_file" name="secrets_store_file" class="txt-box-black" bind:value={secrets_store_file}>
      </div>
      <div>
          <label for="architecture" class="txt-box-lable-black">architecture</label>
          <input type="text" id="architecture" name="architecture" class="txt-box-black" bind:value={architecture}>
      </div>
      <div>
          <label for="workspace_path" class="txt-box-lable-black">workspace_path</label>
          <input type="text" id="workspace_path" name="workspace_path" class="txt-box-black" bind:value={workspace_path}>
      </div>
      <div>
          <label for="backup_mount" class="txt-box-lable-black">backup_mount</label>
          <input type="text" id="backup_mount" name="backup_mount" class="txt-box-black" bind:value={backup_mount}>
      </div>
</div>

<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>
  
<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="automate_fqdn" class="txt-box-lable-black">automate_fqdn</label>
      <input type="text" id="automate_fqdn" name="automate_fqdn" class="txt-box-black" bind:value={automate_fqdn}>
  </div>
  <div>
      <label for="automate_admin_password" class="txt-box-lable-black">automate_admin_password</label>
      <input type="text" id="automate_admin_password" name="automate_admin_password" class="txt-box-black" bind:value={automate_admin_password}>
  </div>
  <div>
      <label for="instance_count" class="txt-box-lable-black">instance_count</label>
      <input type="text" id="automate_instance_count" name="automate_instance_count" class="txt-box-black" bind:value={automate_instance_count}>
  </div>
  <div>
      <label for="config_file" class="txt-box-lable-black">config_file</label>
      <input type="text" id="automate_config_file" name="automate_config_file" class="txt-box-black" bind:value={automate_config_file}>
  </div>
  <div>
      <label for="enable_custom_certs" class="txt-box-lable-black">enable_custom_certs</label>
      <input type="text" id="automate_enable_custom_certs" name="automate_enable_custom_certs" class="txt-box-black" bind:value={automate_enable_custom_certs}>
  </div>
  <div>
      <label for="root_ca" class="txt-box-lable-black">root_ca</label>
      <input type="text" id="automate_root_ca" name="automate_root_ca" class="txt-box-black" bind:value={automate_root_ca}>
  </div>
  <div>
      <label for="private_key" class="txt-box-lable-black">private_key</label>
      <input type="text" id="automate_private_key" name="automate_private_key" class="txt-box-black" bind:value={automate_private_key}>
  </div>
  <div>
      <label for="public_key" class="txt-box-lable-black">public_key</label>
      <input type="text" id="automate_public_key" name="automate_public_key" class="txt-box-black" bind:value={automate_public_key}>
  </div>
</div>

<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>

<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="instance_count" class="txt-box-lable-black">instance_count</label>
      <input type="text" id="cs_instance_count" name="cs_instance_count" class="txt-box-black" bind:value={cs_instance_count}>
  </div>
  <div>
      <label for="enable_custom_certs" class="txt-box-lable-black">enable_custom_certs</label>
      <input type="text" id="cs_enable_custom_certs" name="cs_enable_custom_certs" class="txt-box-black" bind:value={cs_enable_custom_certs}>
  </div>
  <div>
      <label for="private_key" class="txt-box-lable-black">private_key</label>
      <input type="text" id="cs_private_key" name="cs_private_key" class="txt-box-black" bind:value={cs_private_key}>
  </div>
  <div>
      <label for="public_key" class="txt-box-lable-black">public_key</label>
      <input type="text" id="cs_public_key" name="cs_public_key" class="txt-box-black" bind:value={cs_public_key}>
  </div>
</div>


<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>

<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="os_instance_count" class="txt-box-lable-black">instance_count</label>
      <input type="text" id="os_instance_count" name="os_instance_count" class="txt-box-black" bind:value={os_instance_count}>
  </div>
  <div>
      <label for="os_enable_custom_certs" class="txt-box-lable-black">enable_custom_certs</label>
      <input type="text" id="os_enable_custom_certs" name="os_enable_custom_certs" class="txt-box-black" bind:value={os_enable_custom_certs}>
  </div>
  <div>
      <label for="os_root_ca" class="txt-box-lable-black">root_ca</label>
      <input type="text" id="os_root_ca" name="os_root_ca" class="txt-box-black" bind:value={os_root_ca}>
  </div>
  <div>
      <label for="os_admin_key" class="txt-box-lable-black">admin_key</label>
      <input type="text" id="os_admin_key" name="os_admin_key" class="txt-box-black" bind:value={os_admin_key}>
  </div>
  <div>
      <label for="os_admin_cert" class="txt-box-lable-black">admin_cert</label>
      <input type="text" id="os_admin_cert" name="os_admin_cert" class="txt-box-black" bind:value={os_admin_cert}>
  </div>
  <div>
      <label for="os_private_key" class="txt-box-lable-black">private_key</label>
      <input type="text" id="os_private_key" name="os_private_key" class="txt-box-black" bind:value={os_private_key}>
  </div>
  <div>
      <label for="os_public_key" class="txt-box-lable-black">public_key</label>
      <input type="text" id="os_public_key" name="os_public_key" class="txt-box-black" bind:value={os_public_key}>
  </div>
</div>


<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>



<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="pg_instance_count" class="txt-box-lable-black">instance_count</label>
      <input type="text" id="pg_instance_count" name="pg_instance_count" class="txt-box-black" bind:value={pg_instance_count}>
  </div>
  <div>
      <label for="pg_enable_custom_certs" class="txt-box-lable-black">enable_custom_certs</label>
      <input type="text" id="pg_enable_custom_certs" name="pg_enable_custom_certs" class="txt-box-black" bind:value={pg_enable_custom_certs}>
  </div>
  <div>
      <label for="pg_root_ca" class="txt-box-lable-black">root_ca</label>
      <input type="text" id="pg_root_ca" name="pg_root_ca" class="txt-box-black" bind:value={pg_root_ca}>
  </div>
  <div>
      <label for="pg_private_key" class="txt-box-lable-black">private_key</label>
      <input type="text" id="pg_private_key" name="pg_private_key" class="txt-box-black" bind:value={pg_private_key}>
  </div>
  <div>
      <label for="pg_public_key" class="txt-box-lable-black">public_key</label>
      <input type="text" id="pg_public_key" name="pg_public_key" class="txt-box-black" bind:value={pg_public_key}>
  </div>
</div>



<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>




<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="network_profile" class="txt-box-lable-black">profile</label>
      <input type="text" id="network_profile"  name="network_profile" class="txt-box-black" bind:value={network_profile}>
  </div>
  <div>
      <label for="network_region" class="txt-box-lable-black">region</label>
      <input type="text" id="network_region" name="network_region" class="txt-box-black" bind:value={network_region}>
  </div>
  <div>
      <label for="network_aws_vpc_id" class="txt-box-lable-black">aws_vpc_id</label>
      <input type="text" id="network_aws_vpc_id" name="network_aws_vpc_id" class="txt-box-black" bind:value={network_aws_vpc_id}>
  </div>
  <div>
      <label for="network_aws_cidr_block_addr" class="txt-box-lable-black">aws_cidr_block_addr</label>
      <input type="text" id="network_aws_cidr_block_addr" name="network_aws_cidr_block_addr" class="txt-box-black" bind:value={network_aws_cidr_block_addr}>
  </div>
  <div>
      <label for="network_private_custom_subnets" class="txt-box-lable-black">private_custom_subnets</label>
      <input type="text" id="network_private_custom_subnets" name="network_private_custom_subnets" class="txt-box-black" bind:value={network_private_custom_subnets}>
  </div>
  <div>
      <label for="network_public_custom_subnets" class="txt-box-lable-black">public_custom_subnets</label>
      <input type="text" id="network_public_custom_subnets" name="network_public_custom_subnets" class="txt-box-black" bind:value={network_public_custom_subnets}>
  </div>
  <div>
      <label for="network_ssh_key_pair_name" class="txt-box-lable-black">ssh_key_pair_name</label>
      <input type="text" id="network_ssh_key_pair_name" name="network_ssh_key_pair_name" class="txt-box-black" bind:value={network_ssh_key_pair_name}>
  </div>
</div>


<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>


<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="ami_id" class="txt-box-lable-black">ami_id</label>
      <input type="text" id="ami_id" name="ami_id" class="txt-box-black" bind:value={ami_id}>
  </div>
  <div>
      <label for="delete_on_termination" class="txt-box-lable-black">delete_on_termination</label>
      <input type="text" id="delete_on_termination" name="delete_on_termination" class="txt-box-black" bind:value={delete_on_termination}>
  </div>
  <div>
      <label for="automate_server_instance_type" class="txt-box-lable-black">automate_server_instance_type</label>
      <input type="text" id="automate_server_instance_type" name="automate_server_instance_type" class="txt-box-black" bind:value={automate_server_instance_type}>
  </div>
  <div>
      <label for="chef_server_instance_type" class="txt-box-lable-black">chef_server_instance_type</label>
      <input type="text" id="chef_server_instance_type" name="chef_server_instance_type" class="txt-box-black" bind:value={chef_server_instance_type}>
  </div>
  <div>
      <label for="opensearch_server_instance_type" class="txt-box-lable-black">opensearch_server_instance_type</label>
      <input type="text" id="opensearch_server_instance_type" name="opensearch_server_instance_type" class="txt-box-black" bind:value={opensearch_server_instance_type}>
  </div>
  <div>
      <label for="postgresql_server_instance_type" class="txt-box-lable-black">postgresql_server_instance_type</label>
      <input type="text" id="postgresql_server_instance_type" name="postgresql_server_instance_type" class="txt-box-black" bind:value={postgresql_server_instance_type}>
  </div>
  <div>
      <label for="automate_lb_certificate_arn" class="txt-box-lable-black">automate_lb_certificate_arn</label>
      <input type="text" id="automate_lb_certificate_arn" name="automate_lb_certificate_arn" class="txt-box-black" bind:value={automate_lb_certificate_arn}>
  </div>
  <div>
      <label for="chef_server_lb_certificate_arn" class="txt-box-lable-black">chef_server_lb_certificate_arn</label>
      <input type="text" id="chef_server_lb_certificate_arn" name="chef_server_lb_certificate_arn" class="txt-box-black" bind:value={chef_server_lb_certificate_arn}>
  </div>
  <div>
      <label for="automate_ebs_volume_iops" class="txt-box-lable-black">automate_ebs_volume_iops</label>
      <input type="text" id="automate_ebs_volume_iops" name="automate_ebs_volume_iops" class="txt-box-black" bind:value={automate_ebs_volume_iops}>
  </div>
  <div>
      <label for="automate_ebs_volume_size" class="txt-box-lable-black">automate_ebs_volume_size</label>
      <input type="text" id="automate_ebs_volume_size" name="automate_ebs_volume_size" class="txt-box-black" bind:value={automate_ebs_volume_size}>
  </div>
  <div>
      <label for="automate_ebs_volume_type" class="txt-box-lable-black">automate_ebs_volume_type</label>
      <input type="text" id="automate_ebs_volume_type" name="automate_ebs_volume_type" class="txt-box-black" bind:value={automate_ebs_volume_type}>
  </div>
  <div>
      <label for="chef_ebs_volume_iops" class="txt-box-lable-black">chef_ebs_volume_iops</label>
      <input type="text" id="chef_ebs_volume_iops" name="chef_ebs_volume_iops" class="txt-box-black" bind:value={chef_ebs_volume_iops}>
  </div>
  <div>
      <label for="chef_ebs_volume_size" class="txt-box-lable-black">chef_ebs_volume_size</label>
      <input type="text" id="chef_ebs_volume_size" name="chef_ebs_volume_size" class="txt-box-black" bind:value={chef_ebs_volume_size}>
  </div>
  <div>
      <label for="chef_ebs_volume_type" class="txt-box-lable-black">chef_ebs_volume_type</label>
      <input type="text" id="chef_ebs_volume_type" name="chef_ebs_volume_type" class="txt-box-black" bind:value={chef_ebs_volume_type}>
  </div>
  <div>
      <label for="opensearch_ebs_volume_iops" class="txt-box-lable-black">opensearch_ebs_volume_iops</label>
      <input type="text" id="opensearch_ebs_volume_iops" name="opensearch_ebs_volume_iops" class="txt-box-black" bind:value={opensearch_ebs_volume_iops}>
  </div>
  <div>
      <label for="opensearch_ebs_volume_size" class="txt-box-lable-black">opensearch_ebs_volume_size</label>
      <input type="text" id="opensearch_ebs_volume_size" name="opensearch_ebs_volume_size" class="txt-box-black" bind:value={opensearch_ebs_volume_size}>
  </div>
  <div>
      <label for="opensearch_ebs_volume_type" class="txt-box-lable-black">opensearch_ebs_volume_type</label>
      <input type="text" id="opensearch_ebs_volume_type" name="opensearch_ebs_volume_type" class="txt-box-black" bind:value={opensearch_ebs_volume_type}>
  </div>
  <div>
      <label for="postgresql_ebs_volume_iops" class="txt-box-lable-black">postgresql_ebs_volume_iops</label>
      <input type="text" id="postgresql_ebs_volume_iops" name="postgresql_ebs_volume_iops" class="txt-box-black" bind:value={postgresql_ebs_volume_iops}>
  </div>
  <div>
      <label for="postgresql_ebs_volume_size" class="txt-box-lable-black">postgresql_ebs_volume_size</label>
      <input type="text" id="postgresql_ebs_volume_size" name="postgresql_ebs_volume_size" class="txt-box-black" bind:value={postgresql_ebs_volume_size}>
  </div>
  <div>
      <label for="postgresql_ebs_volume_type" class="txt-box-lable-black">postgresql_ebs_volume_type</label>
      <input type="text" id="postgresql_ebs_volume_type" name="postgresql_ebs_volume_type" class="txt-box-black" bind:value={postgresql_ebs_volume_type}>
  </div>
</div>


<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>




<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="lb_access_logs" class="txt-box-lable-black">lb_access_logs</label>
      <input type="text" id="lb_access_logs" name="lb_access_logs" class="txt-box-black" bind:value={lb_access_logs}>
  </div>
</div>



<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>



<div class="grid gap-6 mb-6 md:grid-cols-4">
  <div>
      <label for="X-Contact" class="txt-box-lable-black">X-Contact</label>
      <input type="text" id="X-Contact" name="X-Contact" class="txt-box-black" bind:value={x_contact}>
  </div>
  <div>
      <label for="X-Dept" class="txt-box-lable-black">X-Dept</label>
      <input type="text" id="X-Dept" name="X-Dept" class="txt-box-black" bind:value={x_dept}>
  </div>
  <div>
      <label for="X-Project" class="txt-box-lable-black">X-Project</label>
      <input type="text" id="X-Project" name="X-Project" class="txt-box-black" bind:value={x_project}>
  </div>
</div>


<div class="inline-flex items-center justify-center w-full">
  <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
</div>


<div class="align : content-center self-center grid gap-6 mb-6 md:grid-cols-4">
  <button type="submit" class="btn_submit" >Submit</button>
</div>

</form>


<p id = "aws_chef_managed_config" class = "hidden">

# This is a Chef Automate AWS HA mode configuration file. You can run
# 'chef-automate deploy' with this config file and it should
# successfully create a new Chef Automate HA instances with default settings.

[architecture.aws]
## === INPUT NEEDED ===
# Eg.: ssh_user = "ubuntu"
ssh_user = "{ssh_user}"

# custome ssh port no to connect instances, default will be 22
# Eg.: ssh_port = "22"
ssh_port = "{ssh_port}"

# Private SSH key file path, which has access to all the instances.
# Eg.: ssh_key_file = "~/.ssh/A2HA.pem"
ssh_key_file = "{ssh_key_file}"

# Provide Password if needed to run sudo commands.
# sudo_password = "{sudo_password}"

# Eg.: backup_config = "efs" or "s3"
backup_config = "{backup_config}"

#    Note: 1. To create new bucket, make sure to give a unique name
#          2. User can also add existing bucket
#
# If s3 is selected for backup_config,
#     uncomment and add the value for following 's3_bucketName' attribute

# s3_bucketName = "{s3_bucketName}"
## === ===

secrets_key_file = "/hab/a2_deploy_workspace/secrets.key"
secrets_store_file = "/hab/a2_deploy_workspace/secrets.json"
architecture = "aws"
workspace_path = "/hab/a2_deploy_workspace"

# DON'T MODIFY THE BELOW LINE (backup_mount)
backup_mount = "{backup_mount == '' ? '/mnt/automate_backups' : backup_mount}"


[automate.config]
## === INPUT NEEDED ===

# Password for Automate UI for 'admin' user.
admin_password = "{automate_admin_password}"

# Automate Load Balancer FQDN eg.: "chefautomate.example.com"
fqdn = "{automate_fqdn}"

# No. of Automate Frontend Machine or VM eg.: instance_count = "2"
instance_count = "{automate_instance_count}"

## === ===

#Deprecated Config - automate_setup_type is not supported
# automate_setup_type = "automate"

# teams_port = ""
config_file = "configs/automate.toml"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs = {automate_enable_custom_certs == '' ? false : automate_enable_custom_certs}
# Add Automate load balancer root-ca and keys
{#if automate_enable_custom_certs == true }
  root_ca = "{automate_root_ca}"
  private_key = "{automate_private_key}"
  public_key = "{automate_public_key}"
{:else}
  # root_ca = "{automate_root_ca}"
  # private_key = "{automate_private_key}"
  # public_key = "{automate_public_key}"
{/if}

[chef_server.config]
## === INPUT NEEDED ===

# No. of Chef Server Frontend Machine or VM eg.: instance_count = "2"
instance_count = "{cs_instance_count}"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs =  {cs_enable_custom_certs == '' ? false : cs_enable_custom_certs}
# Add Chef Server load balancer root-ca and keys
{#if cs_enable_custom_certs == true }
  private_key = "{cs_private_key}"
  public_key = "{cs_public_key}"
{:else}
  # private_key = "{cs_private_key}"
  # public_key = "{cs_public_key}"
{/if}

## === ===


[opensearch.config]
## === INPUT NEEDED ===

# No. of OpenSearch DB Backend Machine or VM eg.: instance_count = "3"
instance_count = "{os_instance_count}"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs = {os_enable_custom_certs == '' ? false : os_enable_custom_certs}
# Add OpenSearch load balancer root-ca and keys
{#if os_enable_custom_certs == true }
root_ca = "{os_root_ca}"
admin_key = "{os_admin_key}"
admin_cert = "{os_admin_cert}"
private_key = "{os_private_key}"
public_key = "{os_public_key}"
{:else}
# root_ca = "{os_root_ca}"
# admin_key = "{os_admin_key}"
# admin_cert = "{os_admin_cert}"
# private_key = "{os_private_key}"
# public_key = "{os_public_key}"
{/if}

## === ===

[postgresql.config]
## === INPUT NEEDED ===

# No. of Postgresql DB Backend Machine or VM eg.: instance_count = "3"
instance_count = "{pg_instance_count}"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs = {pg_enable_custom_certs == '' ? false : pg_enable_custom_certs}
# Add Postgresql load balancer root-ca and keys
{#if pg_enable_custom_certs == true }
root_ca = "{pg_root_ca}"
private_key = "{pg_private_key}"
public_key = "{pg_public_key}"
{:else}
# root_ca = "{pg_root_ca}"
# private_key = "{pg_private_key}"
# public_key = "{pg_public_key}"
{/if}
## === ===


# ======================================================

[aws.config]
# ============== AWS network Config ============================
## === INPUT NEEDED ===

# Eg.: profile = "default"
profile = "{network_profile}"

# Eg.: region = "us-east-1"
region = "{network_region}"

# Provide vpcid and cidr block
# Eg.: aws_vpc_id = "vpc12318h"
aws_vpc_id  = "{network_aws_vpc_id}"

# Eg.: aws_cidr_block_addr = "172.31.64.0"
aws_cidr_block_addr  = "{network_aws_cidr_block_addr}"

# Eg.: private_custom_subnets = ["subnet-e556d512", "subnet-e556d513", "subnet-e556d514"]
private_custom_subnets = [{network_private_custom_subnets}]

# Eg.: public_custom_subnets = ["subnet-p556d512", "subnet-p556d513", "subnet-p556d514"]
public_custom_subnets = [{network_public_custom_subnets}]

# ssh key pair name in AWS to access instances
# eg: ssh_key_pair_name = "A2HA"
ssh_key_pair_name = "{network_ssh_key_pair_name}"

## === ===


# ============== Managed Services ======================

    ## === INPUT NEEDED ===
    # in case your are trying to deploy with aws managed
    # RDS, and openseach, then make setup_managed_services = true,
    # and modify other managed services settings.
    setup_managed_services = false

    ## === ===


# ============== EC2 Instance Config ===================

## === INPUT NEEDED ===

# This AMI should be from the Same Region which we selected above.
# eg: ami_id = "ami-08d4ac5b634553e16" # This ami is of Ubuntu 20.04 in us-east-1
ami_id = "{ami_id}"

# eg: delete_on_termination = true or false
delete_on_termination = {delete_on_termination}

# eg: automate_server_instance_type = "t3.medium"
automate_server_instance_type = "{automate_server_instance_type}"

# eg: chef_server_instance_type = "t3.medium"
chef_server_instance_type = "{chef_server_instance_type}"

# eg: opensearch_server_instance_type = "m5.large"
opensearch_server_instance_type = "{opensearch_server_instance_type}"

# eg: postgresql_server_instance_type = "t3.medium"
postgresql_server_instance_type = "{postgresql_server_instance_type}"

# eg: automate_lb_certificate_arn = "arn:aws:acm...."
automate_lb_certificate_arn = "{automate_lb_certificate_arn}"

# eg: chef_server_lb_certificate_arn = "arn:aws:acm...."
chef_server_lb_certificate_arn = "{chef_server_lb_certificate_arn}"

# eg: automate_ebs_volume_iops = "100"
automate_ebs_volume_iops = "{automate_ebs_volume_iops}"

# eg: automate_ebs_volume_size = "50"
automate_ebs_volume_size = "{automate_ebs_volume_size}"

# eg: automate_ebs_volume_type = "gp3"
automate_ebs_volume_type = "{automate_ebs_volume_type}"

# eg: chef_ebs_volume_iops = "100"
chef_ebs_volume_iops = "{chef_ebs_volume_iops}"

# eg: chef_ebs_volume_size = "50"
chef_ebs_volume_size = "{chef_ebs_volume_size}"

# eg: chef_ebs_volume_type = "gp3"
chef_ebs_volume_type = "{chef_ebs_volume_type}"

# eg: opensearch_ebs_volume_iops = "100"
opensearch_ebs_volume_iops = "{opensearch_ebs_volume_iops}"

# eg: opensearch_ebs_volume_size = "50"
opensearch_ebs_volume_size = "{opensearch_ebs_volume_size}"

# eg: opensearch_ebs_volume_type = "gp3"
opensearch_ebs_volume_type = "{opensearch_ebs_volume_type}"

# eg: postgresql_ebs_volume_iops = "100"
postgresql_ebs_volume_iops = "{postgresql_ebs_volume_iops}"

# eg: postgresql_ebs_volume_size = "50"
postgresql_ebs_volume_size = "{postgresql_ebs_volume_size}"

# eg: postgresql_ebs_volume_type = "gp3"
postgresql_ebs_volume_type = "{postgresql_ebs_volume_type}"

## === ===

# Enabale/Disable load balancer logs
# eg lb_access_logs = "false"
lb_access_logs = "{lb_access_logs == '' ? false : lb_access_logs }"

# ======================================================

# ============== EC2 Instance Tags =====================
X-Contact = "{x_contact}"
X-Dept = "{x_dept}"
X-Project = "{x_project}"
# ======================================================

# ============== Deprecated ============================
#Deprecated Config - below config is not supported
#aws_automate_route53_prefix = ""
#aws_chef_server_route53_prefix = ""
#aws_route53_hosted_zone = "saas.chef.io"
#postgresql_db_identifier = ""
#elasticsearch_domain_name = ""
#rds_postgresql_instance_type = "db.t3.medium"
#rds_postgresql_restore_identifier = ""
#datadog_api_key = "DATADOG_API_KEY"
#use_existing_managed_infra = false
#X-Production = "false"
#X-Customer = ""
# ======================================================
</p>