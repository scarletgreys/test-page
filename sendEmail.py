import win32com.client as win32
outlook = win32.gencache.EnsureDispatch("Outlook.Application")

A = ["yuan.yudistira@siloamhospitals.com - 505755569451df7fdfc1c3e0e49494cf09a9199884037bc13a27269c330acc36", "Parman.Simanjuntak@siloamhospitals.com - 49450d11695252eabf856a36fbcb5973f68c15afb6faa6f174a725128d9f9548", "achmad.zamrozi@siloamhospitals.com - fb75d4ca2fc1ee674788c1e8cc7f0c35fbd15e9314c081c85894ea7a159b0727", "irfan.wijaya@siloamhospitals.com - e73d84ee489b5c7cb94005e181e3c58c3958327fa1779cab17b81c2793663b15", "ahmad.siregar@siloamhospitals.com - 26c344cebbb44d140ca9d1fdf3c3db27d310d35babea9cda2973a881aebd2469", "calvin.hartanto@siloamhospitals.com - 48fdb588c0fcfaef0b9e61a738b3e96e21f5cac874a8d89aa1648e4ea4021242", "davis.bertana@siloamhospitals.com - ee489cdc4b7eb8aebf8ba08dcac2e020c1d1cb26607d56d3b9b36c83f641e161", "margo.prasetyo@siloamhospitals.com - 7d3d0009fa013a37692f10fb21049d5935136277f49f740fc04008ae21efa827", "anton.ansori@siloamhospitals.com - 3a6764220f5b3cda13807fb5b2a40429dd58b1f87487947f2aaafabd3c08bde1", "jaga.julianto@siloamhospitals.com - 7a10cc12185c158070e1bd5eb811dbf19f6fd1ff9b2c7acf12fdcb55a0738f16"]

for a in A:
    email, hash = a.split("-")
    email = email.strip()
    hash = hash.strip()
    print("Sending email " + email)
    mail = outlook.CreateItem(0)
    mail.To = email
    mail.Subject = 'Test send hasil phishing'
    mail.HTMLBody = f"""<h2 style="color:#007bff;">You're Invited! Exclusive Iftar Gathering</h2><p>Dear Team,</p><p>We are excited to invite you to an exclusive Iftar gathering to celebrate Ramadan together.</p><p><strong>Date:</strong> Friday, March 15, 2025</p><p><strong>Time:</strong> 6:00 PM - 9:00 PM</p><p><strong>Venue:</strong> The Grand Hall, City Center</p><p>Please confirm your attendance by clicking the link below:</p><p><a href="https://scarletgreys.github.io/test-page/?hashEmail={hash}&campaignId=2024B1" style="display:inline-block;padding:12px 20px;background:#28a745;color:#fff;text-decoration:none;border-radius:5px;font-size:16px;">Confirm Your Attendance</a></p><p>Looking forward to breaking the fast with you!</p><p>Best regards,<br><strong>HR Department</strong><br>XYZ Corporation</p><p style="font-size:12px;color:#666;">This is an automated message. Please do not reply.</p><img src=https://campaign-ruddy.vercel.app/api/t/2024B1/email/{hash}"""
    print(mail.HTMLBody)
    mail.Send()