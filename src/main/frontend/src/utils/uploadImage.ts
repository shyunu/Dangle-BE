import { supabase } from "../lib/supabaseClient";

export const uploadImage = async (file: File, bucketName: string) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

    if (error) {
        console.error("이미지 업로드 실패:", error);
        return null;
    }

    return data?.path; // 업로드된 파일 경로 반환
};