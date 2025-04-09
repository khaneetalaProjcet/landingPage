"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

function FAQComponent() {
  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        className="text-start font-light text-sm"
        title="چه زمانی باید احراز هویت انجام دهم؟"
      >
        پس از ثبت‌ نام در سامانه مجموعه خانه طلا استعلام‌های لازم از مراجع مرتبط
        به‌صورت برخط از سازمان ثبت‌ احوال دریافت گردیده و پس از تایید آن حداکثر
        ظرف مدت 5 دقیقه احراز هویت شما به صورت سیستمی و خودکار انجام خواهد شد و
        میتوانید خرید و فروش خود را در مجموعه خانه طلا آغاز کنید.
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        className="text-start font-light text-sm"
        title="کارمزد خرید و فروش در خانه طلا چقدر است؟"
      >
        کارمزد خرید طلای آب‌شده در خانه طلا 0 درصد مبلغ معامله می‌باشد و کارمزد
        فروش طلای آب شده در خانه طلا 1 درصد مبلغ معامله میباشد
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        className="text-start font-light text-sm"
        title="بعد از فروش طلا و برداشت ریال آن، وجه ریالی در چه مدت واریز می‌شود؟"
      >
        درخواست های برداشت ریالی بر اساس اولویت درخواست کاربران به صورت خودکار
        در صف واریز قرار گرفته و در قالب انتقال وجه پایا به بانک جهت واریز به
        حساب مشتریان ارجاع خواهد شد، همچنین پیامک اطلاع رسانی همزمان با ثبت
        درخواست واریز بانکی برای شما ارسال می گردد. تمامی مبالغ حداکثر تا 24
        ساعت بعد از ثبت درخواست، به حساب مقصد واریز میگردد.
      </AccordionItem>
    </Accordion>
  );
}

export default FAQComponent;
