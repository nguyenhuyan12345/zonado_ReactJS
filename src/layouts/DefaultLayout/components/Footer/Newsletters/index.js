function Newsletters() {
    return (
        <div class="row">
            <div class="col-6">
                <div class="footer-block">
                    <h3>Đăng ký nhận tin từ ZONADO</h3>
                    <p>
                        Đăng ký ngay để là người đầu tiên cập nhật sớm nhất
                        những tin tức thời trang, những bộ sưu tập cũng như ưu
                        đãi hấp dẫn từ ZONADO
                    </p>
                </div>
            </div>
            <div class="col-6">
                <div class="relative">
                    <input
                        type="hidden"
                        id="contact_tags"
                        name="contact[tags]"
                        value="Đăng kí nhận tin"
                    />
                    <input
                        type="email"
                        class="form-control"
                        value=""
                        placeholder="Email của bạn"
                        name="contact[email]"
                        id="mail"
                        aria-label="Đăng ký nhận tin"
                    />
                    <button name="subscribe" id="subscribe" disabled="disabled">
                        Đăng ký
                    </button>
                </div>
                <div class="agree">
                    <input type="checkbox" class="chb-agree" />
                    <label>
                        <span>Tôi đồng ý nhận tin từ PIGOFASHION</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Newsletters;
