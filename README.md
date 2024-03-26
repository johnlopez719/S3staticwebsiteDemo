## Table Of Content
 - [Overview](#Overview)
 - [Lab Diagram](#Lab_Diagram)
 - [Lab Instructions](#Lab_Instructions)
 - [Resources](#Resources)

## Overview

## Lab Diagram
![Static Website](https://github.com/johnlopez719/S3staticwebsiteDemo/assets/30753364/23c723cd-6e3c-4f07-b5ea-a5d9c3dcbae6)



## Lab Instructions
**1. Prepare Your Static Website Files**

- Ensure you have a static website (HTML, CSS, JavaScript, images) ready for deployment. If you don't have one, create a simple HTML file as an example.

**2. Create an Amazon S3 Bucket for Website Hosting**

- **Step 2.1**: Sign in to the AWS Management Console and open the Amazon S3 console.
- **Step 2.2**: Click "Create bucket". Provide a unique name for your bucket and select the AWS Region you want to host your site in.
- **Step 2.3**: Uncheck "Block all public access" settings and acknowledge that the bucket will be publicly accessible.
- **Step 2.4**: Click "Create bucket".

**3. Enable Static Website Hosting**

- **Step 3.1**: Select your newly created bucket and navigate to the "Properties" tab.
- **Step 3.2**: Click on "Static website hosting" and select "Use this bucket to host a website". Enter the name of your index document (usually index.html).
- **Step 3.3**: Save the changes.

**4. Upload Your Website Files**

- **Step 4.1**: Go to the "Objects" tab in your bucket and click "Upload".
- **Step 4.2**: Add your website files and upload them to the bucket.

**5. Set Bucket Permissions**

- **Step 5.1**: Navigate to the "Permissions" tab of your bucket.
- **Step 5.2**: Edit the bucket policy to grant public read access to the website files. Use the AWS policy generator if needed, allowing GetObject permission for everyone.

**6. Register a Domain Name with Route 53 (Optional)**

- If you don't have a domain, you can register one directly through AWS Route 53.
- Navigate to the Route 53 console and follow the process to register a domain.

**7. Request a Certificate with AWS Certificate Manager**

- **Step 7.1**: Open the AWS Certificate Manager console.
- **Step 7.2**: Click "Request a certificate", select "Public certificate", and follow the wizard to request a certificate for your domain name. Validate your domain via email or DNS.

**8. Create a CloudFront Distribution**

- **Step 8.1**: Open the CloudFront console and click "Create distribution".
- **Step 8.2**: Select "Web" distribution and specify your S3 bucket's static website endpoint as the origin.
- **Step 8.3**: Choose the SSL certificate you created with AWS Certificate Manager.
- **Step 8.4**: Set the CNAMEs (if you have a domain) and choose the default root object as index.html.
- **Step 8.5**: Create the distribution. It may take some time to deploy.

**9. Update Route 53 to Point to Your CloudFront Distribution (If Using a Custom Domain)**

- Navigate to the Route 53 console.
- Create or edit a record set to point your domain to the CloudFront distribution by choosing "Alias" and selecting the CloudFront distribution you created.

**10. Test Your Website**

- Once your CloudFront distribution is deployed, access your website using the CloudFront distribution domain name (or your custom domain if you've set it up).

Congratulations! You have deployed a static website on AWS, utilizing S3 for storage, CloudFront for global content delivery, secured with an SSL certificate from AWS Certificate Manager, and optionally using a custom domain managed by Route 53. 🥳

## Resources
