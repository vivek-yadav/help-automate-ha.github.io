<script>
    export let ssh_user = ""
    export let ssh_port = ""
    export let sudo_password = ""
    export let ssh_key_file = ""
    export let backup_config = ""
    export let bucket_name = ""
    export let access_key = ""
    export let secret_key = ""
    export let region = ""
    export let endpoint = ""
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
    export let automate_certbyip_address = ""
    export let automate_certbyip_private_key = ""
    export let automate_certbyip_public_key = ""
    export let cs_instance_count = ""
    export let cs_enable_custom_certs = ""
    export let cs_private_key = ""
    export let cs_public_key = ""
    export let cs_certbyip_address = ""
    export let cs_certbyip_private_key = ""
    export let cs_certbyip_public_key = ""
    export let os_instance_count = ""
    export let os_enable_custom_certs = ""
    export let os_root_ca = ""
    export let os_admin_key = ""
    export let os_admin_cert = ""
    export let os_private_key = ""
    export let os_public_key = ""
    export let os_certbyip_address = ""
    export let os_certbyip_private_key = ""
    export let os_certbyip_public_key = ""
    export let pg_instance_count = ""
    export let pg_enable_custom_certs = ""
    export let pg_root_ca = ""
    export let pg_private_key = ""
    export let pg_public_key = ""
    export let pg_certbyip_address = ""
    export let pg_certbyip_private_key = ""
    export let pg_certbyip_public_key = ""
    export let automate_ips = ""
    export let cs_ips = ""
    export let os_ips = ""
    export let pg_ips = ""
    
  
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
        let ptagEle =  document.getElementById('onprem_chef_managed_config')
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
            <label for="sudo_password" class="txt-box-lable-black">sudo password</label>
            <input type="text" id="sudo_password" name="sudo_password" class="txt-box-black" bind:value={sudo_password}>
        </div>
        <div>
            <label for="ssh_key_file" class="txt-box-lable-black">SSH Key File</label>
            <input type="text" id="ssh_key_file" name="ssh_key_file" class="txt-box-black" bind:value={ssh_key_file}>
        </div>
        <div>
            <label for="backup_config" class="txt-box-lable-black">Backup Config</label>
            <input type="text" id="backup_config" name="backup_config" class="txt-box-black" bind:value={backup_config}>
        </div>
        <div>
            <label for="s3_bucketName" class="txt-box-lable-black">s3_bucketName</label>
            <input type="text" id="s3_bucketName" name="s3_bucketName" class="txt-box-black" bind:value={bucket_name}>
        </div>
        <div>
            <label for="access_key" class="txt-box-lable-black">s3_access_key</label>
            <input type="text" id="access_key" name="access_key" class="txt-box-black" bind:value={access_key}>
        </div>
        <div>
            <label for="secret_key" class="txt-box-lable-black">s3_secret_key</label>
            <input type="text" id="secret_key" name="secret_key" class="txt-box-black" bind:value={secret_key}>
        </div>
        <div>
            <label for="region" class="txt-box-lable-black">s3_region</label>
            <input type="text" id="region" name="region" class="txt-box-black" bind:value={region}>
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
        <label for="automate_instance_count" class="txt-box-lable-black">instance_count</label>
        <input type="text" id="automate_instance_count" name="automate_instance_count" class="txt-box-black" bind:value={automate_instance_count}>
    </div>
    <div>
        <label for="automate_config_file" class="txt-box-lable-black">config_file</label>
        <input type="text" id="automate_config_file" name="automate_config_file" class="txt-box-black" bind:value={automate_config_file}>
    </div>
    <div>
        <label for="automate_enable_custom_certs" class="txt-box-lable-black">enable_custom_certs</label>
        <input type="text" id="automate_enable_custom_certs" name="automate_enable_custom_certs" class="txt-box-black" bind:value={automate_enable_custom_certs}>
    </div>
    <div>
        <label for="automate_root_ca" class="txt-box-lable-black">root_ca</label>
        <input type="text" id="automate_root_ca" name="automate_root_ca" class="txt-box-black" bind:value={automate_root_ca}>
    </div>
    <div>
        <label for="automate_private_key" class="txt-box-lable-black">private_key</label>
        <input type="text" id="automate_private_key" name="automate_private_key" class="txt-box-black" bind:value={automate_private_key}>
    </div>
    <div>
        <label for="automate_public_key" class="txt-box-lable-black">public_key</label>
        <input type="text" id="automate_public_key" name="automate_public_key" class="txt-box-black" bind:value={automate_public_key}>
    </div>
    <div>
        <label for="automate_certbyip_address" class="txt-box-lable-black">automate_certbyip_address</label>
        <input type="text" id="automate_certbyip_address" name="automate_certbyip_address" class="txt-box-black" bind:value={automate_certbyip_address}>
    </div>
    <div>
        <label for="automate_certbyip_private_key" class="txt-box-lable-black">automate_certbyip_private_key</label>
        <input type="text" id="automate_certbyip_private_key" name="automate_certbyip_private_key" class="txt-box-black" bind:value={automate_certbyip_private_key}>
    </div>
    <div>
        <label for="automate_certbyip_public_key" class="txt-box-lable-black">automate_certbyip_public_key</label>
        <input type="text" id="automate_certbyip_public_key" name="automate_certbyip_public_key" class="txt-box-black" bind:value={automate_certbyip_public_key}>
    </div>
  </div>
  
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
  </div>
  
  <div class="grid gap-6 mb-6 md:grid-cols-4">
    <div>
        <label for="cs_instance_count" class="txt-box-lable-black">instance_count</label>
        <input type="text" id="cs_instance_count" name="cs_instance_count" class="txt-box-black" bind:value={cs_instance_count}>
    </div>
    <div>
        <label for="cs_enable_custom_certs" class="txt-box-lable-black">enable_custom_certs</label>
        <input type="text" id="cs_enable_custom_certs" name="cs_enable_custom_certs" class="txt-box-black" bind:value={cs_enable_custom_certs}>
    </div>
    <div>
        <label for="cs_private_key" class="txt-box-lable-black">private_key</label>
        <input type="text" id="cs_private_key" name="cs_private_key" class="txt-box-black" bind:value={cs_private_key}>
    </div>
    <div>
        <label for="cs_public_key" class="txt-box-lable-black">public_key</label>
        <input type="text" id="cs_public_key" name="cs_public_key" class="txt-box-black" bind:value={cs_public_key}>
    </div>
    <div>
        <label for="cs_certbyip_address" class="txt-box-lable-black">cs_certbyip_address</label>
        <input type="text" id="cs_certbyip_address" name="cs_certbyip_address" class="txt-box-black" bind:value={cs_certbyip_address}>
    </div>
    <div>
        <label for="cs_certbyip_private_key" class="txt-box-lable-black">cs_certbyip_private_key</label>
        <input type="text" id="cs_certbyip_private_key" name="cs_certbyip_private_key" class="txt-box-black" bind:value={cs_certbyip_private_key}>
    </div>
    <div>
        <label for="cs_certbyip_public_key" class="txt-box-lable-black">cs_certbyip_public_key</label>
        <input type="text" id="cs_certbyip_public_key" name="cs_certbyip_public_key" class="txt-box-black" bind:value={cs_certbyip_public_key}>
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
    
    <div>
        <label for="os_certbyip_address" class="txt-box-lable-black">os_certbyip_address</label>
        <input type="text" id="os_certbyip_address" name="os_certbyip_address" class="txt-box-black" bind:value={os_certbyip_address}>
    </div>
    <div>
        <label for="os_certbyip_private_key" class="txt-box-lable-black">os_certbyip_private_key</label>
        <input type="text" id="os_certbyip_private_key" name="os_certbyip_private_key" class="txt-box-black" bind:value={os_certbyip_private_key}>
    </div>
    <div>
        <label for="os_certbyip_public_key" class="txt-box-lable-black">os_certbyip_public_key</label>
        <input type="text" id="os_certbyip_public_key" name="os_certbyip_public_key" class="txt-box-black" bind:value={os_certbyip_public_key}>
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
    
    <div>
        <label for="pg_certbyip_address" class="txt-box-lable-black">pg_certbyip_address</label>
        <input type="text" id="pg_certbyip_address" name="pg_certbyip_address" class="txt-box-black" bind:value={pg_certbyip_address}>
    </div>
    
    <div>
        <label for="pg_certbyip_private_key" class="txt-box-lable-black">pg_certbyip_private_key</label>
        <input type="text" id="pg_certbyip_private_key" name="pg_certbyip_private_key" class="txt-box-black" bind:value={pg_certbyip_private_key}>
    </div>
    
    <div>
        <label for="pg_certbyip_public_key" class="txt-box-lable-black">pg_certbyip_public_key</label>
        <input type="text" id="pg_certbyip_public_key" name="pg_certbyip_public_key" class="txt-box-black" bind:value={pg_certbyip_public_key}>
    </div>
  </div>
  
  
  
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
  </div>
        <div>
            <label for="automate_private_ips" class="txt-box-lable-black">automate_private_ips</label>
            <input type="text" id="automate_private_ips" name="automate_private_ips" class="txt-box-black" bind:value={automate_ips}>
        </div>
        <div>
            <label for="chef_server_private_ips" class="txt-box-lable-black">chef_server_private_ips</label>
            <input type="text" id="chef_server_private_ips" name="chef_server_private_ips" class="txt-box-black" bind:value={cs_ips}>
        </div>
        
        <div>
            <label for="os_private_ips" class="txt-box-lable-black">os_private_ips</label>
            <input type="text" id="os_private_ips" name="os_private_ips" class="txt-box-black" bind:value={os_ips}>
        </div>
        
        <div>
            <label for="pg_private_ips" class="txt-box-lable-black">pg_private_ips</label>
            <input type="text" id="pg_private_ips" name="pg_private_ips" class="txt-box-black" bind:value={pg_ips}>
        </div>
  
  
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
  </div>

  
  
  <div class="align : content-center self-center grid gap-6 mb-6 md:grid-cols-4">
    <button type="submit" class="btn_submit" >Submit</button>
  </div>
  
  </form>


  <p id = "onprem_chef_managed_config" class = "hidden">


# This is a Chef Automate AWS HA mode configuration file. You can run
# 'chef-automate deploy' with this config file and it should
# successfully create a new Chef Automate HA instances with default settings.

[architecture.existing_infra]
## === INPUT NEEDED ===
# Eg.: ssh_user = "ubuntu"
ssh_user = "{ssh_user}"

# private ssh key file path to access instances
# Eg.: ssh_user = "~/.ssh/A2HA.pem"
ssh_key_file = "{ssh_key_file}"

# custome ssh port no to connect instances, default will be 22
# Eg.: ssh_port = "22"
ssh_port = "{ssh_port}"

# Provide Password if needed to run sudo commands.
sudo_password = "{sudo_password}"
## === ===

secrets_key_file = "/hab/a2_deploy_workspace/secrets.key"
secrets_store_file = "/hab/a2_deploy_workspace/secrets.json"
architecture = "existing_nodes"
workspace_path = "/hab/a2_deploy_workspace"
# DON'T MODIFY THE BELOW LINE (backup_mount)
backup_mount = "{backup_mount == '' ? '/mnt/automate_backups' : backup_mount}"

# Eg.: backup_config = "object_storage" or "file_system"
backup_config = "{backup_config}"

# If backup_config = "object_storage" fill out [object_storage.config] as well
## Object storage similar to AWS S3 Bucket
[object_storage.config]
bucket_name = "{bucket_name}"
access_key = "{access_key}"
secret_key = "{secret_key}"
# For S3 bucket, default endpoint value is "https://s3.amazonaws.com"
# Include protocol to the enpoint value. Eg: https://customdns1.com or http://customdns2.com
endpoint = "{endpoint}"

# [Optional] Mention object_storage region if applicable
# Eg: region = "us-west-1"
region = "{region}"
## === ===

# ============== EC2 Nodes Config ======================
[automate.config]
## === INPUT NEEDED ===

# Password for Automate UI for 'admin' user.
# admin_password = "{automate_admin_password}"


# Automate Load Balancer FQDN eg.: "chefautomate.example.com"
fqdn = "{automate_fqdn}"

# No. of Automate Frontend Machine or VM eg.: instance_count = "2"
instance_count = "{automate_instance_count}"

## === ===


# teams_port = ""
config_file = "configs/automate.toml"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs = {automate_enable_custom_certs == '' ? false : automate_enable_custom_certs}
# Add Automate load balancer root-ca and keys
{#if automate_enable_custom_certs == true }
root_ca = "{automate_root_ca}"
private_key = "{automate_private_key}"
public_key = "{automate_public_key}"
[[automate.config.certs_by_ip]]
ip = "{automate_certbyip_address}"
private_key = "{automate_certbyip_private_key}"
public_key = "{automate_certbyip_public_key}"
{:else}
# root_ca = "{automate_root_ca}"
# private_key = "{automate_private_key}"
# public_key = "{automate_public_key}"
# [[automate.config.certs_by_ip]]
# ip = "{automate_certbyip_address}"
# private_key = "{automate_certbyip_private_key}"
# public_key = "{automate_certbyip_public_key}"
{/if}

[chef_server.config]
## === INPUT NEEDED ===

# No. of Chef Server Frontend Machine or VM eg.: instance_count = "2"
instance_count = "{cs_instance_count}"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs = {cs_enable_custom_certs == '' ? false : cs_enable_custom_certs}
# Add Chef Server load balancer root-ca and keys
{#if cs_enable_custom_certs == true }
private_key = "{cs_private_key}"
public_key = "{cs_public_key}"
[[chef_server.config.certs_by_ip]]
ip = "{cs_certbyip_address}"
private_key = "{cs_certbyip_private_key}"
public_key = "{cs_certbyip_public_key}"
{:else}
# private_key = "{cs_private_key}"
# public_key = "{cs_public_key}"
# [[chef_server.config.certs_by_ip]]
# ip = "{cs_certbyip_address}"
# private_key = "{cs_certbyip_private_key}"
# public_key = "{cs_certbyip_public_key}"
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
[[opensearch.config.certs_by_ip]]
ip = "{os_certbyip_address}"
private_key = "{os_certbyip_private_key}"
public_key = "{os_certbyip_public_key}"
{:else}
# root_ca = "{os_root_ca}"
# admin_key = "{os_admin_key}"
# admin_cert = "{os_admin_cert}"
# private_key = "{os_private_key}"
# public_key = "{os_public_key}"
# [[opensearch.config.certs_by_ip]]
# ip = "{os_certbyip_address}"
# private_key = "{os_certbyip_private_key}"
# public_key = "{os_certbyip_public_key}"
{/if}
## === ===

[postgresql.config]
## === INPUT NEEDED ===

# No. of Postgresql DB Backend Machine or VM eg.: instance_count = "3"
instance_count = "{pg_instance_count}"

# Set enable_custom_certs = true to provide custom certificates during deployment
enable_custom_certs = {pg_enable_custom_certs == '' ? false : pg_enable_custom_certs}
# Add postgresql load balancer root-ca and keys
{#if pg_enable_custom_certs == true }
root_ca = "{pg_root_ca}"
private_key = "{pg_private_key}"
public_key = "{pg_public_key}"
[[postgresql.config.certs_by_ip]]
ip = "{pg_certbyip_address}"
private_key = "{pg_certbyip_private_key}"
public_key = "pg_certbyip_public_key"
{:else}
# root_ca = "{pg_root_ca}"
# private_key = "{pg_private_key}"
# public_key = "{pg_public_key}"
# [[postgresql.config.certs_by_ip]]
# ip = "{pg_certbyip_address}"
# private_key = "{pg_certbyip_private_key}"
# public_key = "pg_certbyip_public_key"
{/if}
## === ===

[existing_infra.config]
## === INPUT NEEDED ===

# provide comma-seperated IP addresses of nodes, like ["192.0.0.1", "192.0.0.2", "192.0.0.2"]
# No. of IP address should be the same as the No. of instance_count count mentioned above in
# automate.config, chef_server.config, opensearch.config and postgresql.config
automate_private_ips = [{automate_ips}]
chef_server_private_ips = [{cs_ips}]
opensearch_private_ips = [{os_ips}]
postgresql_private_ips = [{pg_ips}]
## === ===

# ============== External Datbase Services ======================

## === INPUT NEEDED ===
# In case you are trying to deploy with AWS Managed Services set type as "aws"
# If you are trying external managed database set type as "self-managed"

[external.database]

# eg type = "aws" or "self-managed"
type = ""

[external.database.postgre_sql]

# eg: instance_url = "managed-rds-db.c5gkx.ap-northeast-1.rds.amazonaws.com:5432"
instance_url = ""

# eg: username = "postgres"
superuser_username = ""

# eg: password = "Progress123"
superuser_password = ""

# eg: dbuser_username = "postgres"
dbuser_username = ""

# eg: dbuser_password = "Progress123"
dbuser_password = ""

# In case of AWS managed RDS leave it blank
postgresql_root_cert = "<cert_content>"

[external.database.open_search]

# eg: managed_opensearch_domain_name = "managed-services-os"
opensearch_domain_name = ""

# eg: opensearch_domain_url = "search-managed-services-os.us-east-1.es.amazonaws.com"
opensearch_domain_url = ""

# eg: opensearch_username = "admin"
opensearch_username = ""

# eg: opensearch_user_password = "Progress@123"
opensearch_user_password = ""

# In case of AWS managed opensearch leave it blank
opensearch_root_cert = "<cert_content>"

[external.database.open_search.aws]

# eg: aws_os_snapshot_role_arn = "arn:aws:iam::1127583934333:role/managed-services"
aws_os_snapshot_role_arn = ""

# eg: os_snapshot_user_access_key_id = "AKIA..........PQS7Q7A"
os_snapshot_user_access_key_id = ""

# eg: os_snapshot_user_access_key_secret = "skP4Mqihj....................anAXAX"
os_snapshot_user_access_key_secret = ""

    
    </p>