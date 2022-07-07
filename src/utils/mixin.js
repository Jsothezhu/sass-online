export function level(level){
    switch (level) {
        case 0:
            return "初级";
        case 1:
            return "中级";
        case 2:
            return "高级";
        default:
            return "没有等级"
    }
}